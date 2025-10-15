terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "grocky-tfstate"
    dynamodb_table = "tfstate-lock"
    region         = "us-east-1"
    key            = "equity-quotient/terraform.tfstate"
  }
}

provider "aws" {
  region = var.region
}
