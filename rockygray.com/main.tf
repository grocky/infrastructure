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
  source           = "github.com/grocky/infrastructure//modules/root-domain"
  root_domain_name = var.domain
}
