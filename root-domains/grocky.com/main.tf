terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "grocky-tfstate"
    dynamodb_table = "tfstate-lock"
    region         = "us-east-1"
    key            = "grocky.com/terraform.tfstate"
  }
}

provider "aws" {
  region = var.region
}
