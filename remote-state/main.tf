terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "grocky-tfstate"
    dynamodb_table = "tfstate-lock"
    region         = "us-east-1"
    key            = "remote-state/terraform.tfstate"
  }
}

provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "grocky-tfstate"

  versioning {
    enabled = true
  }

  lifecycle {
    prevent_destroy = true
  }

  tags = {
    Name = "grocky-tfstate"
    Env  = var.env
  }
}

resource "aws_s3_bucket_public_access_block" "state" {
  block_public_acls       = true
  block_public_policy     = true
  bucket                  = aws_s3_bucket.terraform_state.id
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_dynamodb_table" "terraform_state_lock" {
  name           = "tfstate-lock"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Name = "tfstate-lock"
    Env  = "prod"
  }
}
