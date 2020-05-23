variable "env" {
  default = "prod"
}

variable "region" {
  default = "us-east-1"
}

output "outputs" {
  value = {
    bucket_arn         = aws_s3_bucket.terraform_state.arn
    bucket_name        = aws_s3_bucket.terraform_state.id
    locking_table_arn  = aws_dynamodb_table.terraform_state_lock.arn
    locking_table_name = aws_dynamodb_table.terraform_state_lock.id
  }
}
