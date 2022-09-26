resource "aws_s3_bucket" "blog" {
  bucket = var.blog_domain_name

  tags = {
    Name        = var.blog_domain_name
    Env         = "prod"
    Application = var.blog_domain_name
  }
}

resource "aws_s3_bucket_website_configuration" "blog" {
  bucket = aws_s3_bucket.blog.bucket
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_acl" "blog" {
  bucket = aws_s3_bucket.blog.bucket
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "blog_access_policy" {
  bucket = aws_s3_bucket.blog.bucket
  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"GetPerm",
      "Effect":"Allow",
     "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${var.blog_domain_name}/*"]
    }
  ]
}
POLICY
}

resource "aws_s3_bucket_versioning" "blog" {
  bucket = aws_s3_bucket.blog.bucket
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket" "preview_blog" {
  bucket = var.preview_blog_domain_name

  tags = {
    Name        = var.preview_blog_domain_name
    Env         = "qa"
    Application = var.blog_domain_name
  }
}

resource "aws_s3_bucket_website_configuration" "preview_blog" {
  bucket = aws_s3_bucket.preview_blog.bucket
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_acl" "preview_blog" {
  bucket = aws_s3_bucket.preview_blog.bucket
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "preview_blog_access_policy" {
  bucket = aws_s3_bucket.preview_blog.bucket
  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"GetPerm",
      "Effect":"Allow",
     "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${var.preview_blog_domain_name}/*"]
    }
  ]
}
POLICY
}

resource "aws_s3_bucket_versioning" "preview_blog" {
  bucket = aws_s3_bucket.preview_blog.bucket
  versioning_configuration {
    status = "Enabled"
  }
}
