provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "grocky-tfstate"

  versioning {
    enabled = true
  }

  lifecycle {
    prevent_destroy = true
  }

  tags {
    Name = "grocky-tfstate"
    Env  = "prod"
  }
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

  tags {
    Name = "tfstate-lock"
    Env  = "prod"
  }
}
