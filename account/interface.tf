variable "region" {
  default = "us-east-1"
}

variable "log_bucket_name" {
  default = "rockygray-s3-logs"
}

output "log_bucket" {
  value = aws_s3_bucket.aws_logs.id
}

output "ses_rule_set_name" {
  description = "The name of the SES rule set"
  value       = aws_ses_receipt_rule_set.main.rule_set_name
}
