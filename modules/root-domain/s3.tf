resource "aws_s3_bucket" "root" {
  bucket = var.root_domain_name


  tags = {
    Name        = var.root_domain_name
    Env         = "prod"
    Application = "www.${var.root_domain_name}"
  }
}

resource "aws_s3_bucket_website_configuration" "https_redirect" {
  bucket = aws_s3_bucket.root.bucket
  redirect_all_requests_to {
    host_name = "www.${var.root_domain_name}"
    protocol  = "https"
  }
}

resource "aws_s3_bucket_ownership_controls" "root" {
  bucket = aws_s3_bucket.root.bucket
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "root" {
  bucket = aws_s3_bucket.root.bucket

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "root" {
  depends_on = [
    aws_s3_bucket_ownership_controls.root,
    aws_s3_bucket_public_access_block.root,
  ]

  bucket = aws_s3_bucket.root.bucket
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "allow_access_from_anyone" {
  bucket = aws_s3_bucket.root.bucket
  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"GetPerm",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${var.root_domain_name}/*"]
    }
  ]
}
POLICY
}
