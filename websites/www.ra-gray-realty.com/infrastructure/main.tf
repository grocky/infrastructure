terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "grocky-tfstate"
    dynamodb_table = "tfstate-lock"
    region         = "us-east-1"
    key            = "www.ra-gray-realty.com/terraform.tfstate"
  }
}

provider "aws" {
  region = "us-east-1"
}

data "terraform_remote_state" "root" {
  backend = "s3"
  config = {
    bucket = "grocky-tfstate"
    region = "us-east-1"
    key    = "ra-gray-realty.com/terraform.tfstate"
  }
}

variable "root_domain_name" {
  default = "ra-gray-realty.com"
}

variable "www_domain_name" {
  default = "www.ra-gray-realty.com"
}

output "site_url" {
  value = aws_route53_record.www.fqdn
}

output "s3_website_url" {
  value = aws_s3_bucket.www.website_endpoint
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.www_distribution.domain_name
}

output "cloudfront_www_id" {
  value = aws_cloudfront_distribution.www_distribution.id
}
