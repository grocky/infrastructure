resource "aws_s3_bucket" "root" {
  bucket = var.root_domain_name
  acl    = "public-read"

  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"AddPerm",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${var.root_domain_name}/*"]
    }
  ]
}
POLICY

  website {
    // Note this redirect. Here's where the magic happens.
    redirect_all_requests_to = "https://www.${var.root_domain_name}"
  }

  tags = {
    Name        = "rockygray.com"
    Env         = "prod"
    Application = "www.rockygray.com"
  }
}

