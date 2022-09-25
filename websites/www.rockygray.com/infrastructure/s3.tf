resource "aws_s3_bucket" "www" {
  bucket = var.www_domain_name

  tags = {
    Name        = "www.rockygray.com"
    Env         = "prod"
    Application = "www.rockygray.com"
  }
}

resource "aws_s3_bucket_website_configuration" "www" {
  bucket = aws_s3_bucket.www.bucket
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_acl" "www" {
  bucket = aws_s3_bucket.www.bucket
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "allow_access_from_anyone" {
  bucket = aws_s3_bucket.www.bucket
  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"GetPerm",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${var.www_domain_name}/*"]
    }
  ]
}
POLICY
}

resource "aws_s3_bucket_versioning" "www" {
  bucket = aws_s3_bucket.www.bucket
  versioning_configuration {
    status = "Enabled"
  }
}
