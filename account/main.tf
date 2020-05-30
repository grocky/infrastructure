terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "grocky-tfstate"
    dynamodb_table = "tfstate-lock"
    region         = "us-east-1"
    key            = "account/terraform.tfstate"
  }
}

provider "aws" {
  region = var.region
}

resource "aws_ses_receipt_rule_set" "main" {
  rule_set_name = "primary-rules"
}
