terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "grocky-tfstate"
    dynamodb_table = "tfstate-lock"
    region         = "us-east-1"
    key            = "onyxroseadvisors.com/terraform.tfstate"
  }
}

provider "aws" {
  region = var.region
}

module "root" {
  source           = "../../modules/root-domain"
  root_domain_name = "onyxroseadvisors.com"
}
