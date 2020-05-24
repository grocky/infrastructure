terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "grocky-tfstate"
    dynamodb_table = "tfstate-lock"
    region         = "us-east-1"
    key            = "www.rockygray.com/terraform.tfstate"
  }
}

provider "aws" {
  region = "us-east-1"
}

module "root" {
  source = "./root-domain"

  root_domain_name = var.root_domain_name
}

variable "root_domain_name" {
  default = "rockygray.com"
}

variable "www_domain_name" {
  default = "www.rockygray.com"
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
