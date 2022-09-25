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

resource "aws_s3_bucket_acl" "root" {
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
