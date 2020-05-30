terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "grocky-tfstate"
    dynamodb_table = "tfstate-lock"
    region         = "us-east-1"
    key            = "rockygray.com/terraform.tfstate"
  }
}

provider "aws" {
  region = var.region
}

module "root" {
  source           = "../modules/root-domain"
  root_domain_name = var.domain
}

data "terraform_remote_state" "account" {
  backend = "s3"

  config = {
    bucket = "grocky-tfstate"
    region = "us-east-1"
    key    = "account/terraform.tfstate"
  }
}
