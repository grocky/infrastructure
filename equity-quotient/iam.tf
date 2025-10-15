# IAM Users
resource "aws_iam_user" "claire" {
  name = "claire"

  tags = {
    Name = "Claire - EQ Data Access"
    Env  = var.env
  }
}

resource "aws_iam_user" "aliza" {
  name = "aliza"

  tags = {
    Name = "Aliza - EQ Data Access"
    Env  = var.env
  }
}

# IAM Policy for S3 Bucket Access
resource "aws_iam_policy" "eq_data_expansion_access" {
  name        = "eq-data-expansion-access"
  description = "Policy for accessing eq-data-expansion S3 bucket"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "ListBucket"
        Effect = "Allow"
        Action = [
          "s3:ListBucket",
          "s3:GetBucketLocation",
          "s3:ListBucketVersions"
        ]
        Resource = aws_s3_bucket.eq-data-expansion.arn
      },
      {
        Sid    = "ObjectAccess"
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:GetObjectVersion",
          "s3:PutObject",
          "s3:DeleteObject"
        ]
        Resource = "${aws_s3_bucket.eq-data-expansion.arn}/*"
      }
    ]
  })
}

# Attach policy to Claire
resource "aws_iam_user_policy_attachment" "claire_eq_access" {
  user       = aws_iam_user.claire.name
  policy_arn = aws_iam_policy.eq_data_expansion_access.arn
}

# Attach policy to Aliza
resource "aws_iam_user_policy_attachment" "aliza_eq_access" {
  user       = aws_iam_user.aliza.name
  policy_arn = aws_iam_policy.eq_data_expansion_access.arn
}
