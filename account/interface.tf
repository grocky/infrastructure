variable "region" {
  default = "us-east-1"
}

output "ses_rule_set_name" {
  description = "The name of the SES rule set"
  value       = aws_ses_receipt_rule_set.main.rule_set_name
}
