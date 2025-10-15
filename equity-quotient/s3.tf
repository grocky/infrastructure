resource "aws_s3_bucket" "eq-data-expansion" {
  bucket = "eq-data-expansion"

  lifecycle {
    prevent_destroy = true
  }

  tags = {
    Name = "equity-quotient"
    Env  = var.env
  }
}

resource "aws_s3_bucket_versioning" "eq-data-expansion" {
  bucket = aws_s3_bucket.eq-data-expansion.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_public_access_block" "eq-data-expansion" {
  bucket = aws_s3_bucket.eq-data-expansion.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "eq-data-expansion" {
  bucket = aws_s3_bucket.eq-data-expansion.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "DenyInsecureTransport"
        Effect    = "Deny"
        Principal = "*"
        Action    = "s3:*"
        Resource = [
          aws_s3_bucket.eq-data-expansion.arn,
          "${aws_s3_bucket.eq-data-expansion.arn}/*"
        ]
        Condition = {
          Bool = {
            "aws:SecureTransport" = "false"
          }
        }
      },
      {
        Sid    = "AllowAuthorizedUsers"
        Effect = "Allow"
        Principal = {
          AWS = [
            aws_iam_user.claire.arn,
            aws_iam_user.aliza.arn,
            "arn:aws:iam::625865338337:user/grocky"
          ]
        }
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:ListBucket",
          "s3:GetBucketLocation",
          "s3:GetObjectVersion",
          "s3:ListBucketVersions"
        ]
        Resource = [
          aws_s3_bucket.eq-data-expansion.arn,
          "${aws_s3_bucket.eq-data-expansion.arn}/*"
        ]
      }
    ]
  })

  depends_on = [
    aws_iam_user.claire,
    aws_iam_user.aliza
  ]
}

resource "aws_s3_bucket_public_access_block" "state" {
  block_public_acls       = true
  block_public_policy     = true
  bucket                  = aws_s3_bucket.eq-data-expansion.id
  ignore_public_acls      = true
  restrict_public_buckets = true
}

output "s3_bucket_name" {
  value = aws_s3_bucket.eq-data-expansion.bucket
}

output "s3_bucket_arn" {
  value = aws_s3_bucket.eq-data-expansion.arn
}
