variable "env" {
  default = "prod"
}

variable "region" {
  default = "us-east-1"
}

variable "domain" {
  default = "rockygray.com"
}

output "root_zone_id" {
  value = module.root.outputs.root_zone_id
}

output "nameservers" {
  value = module.root.outputs.nameservers
}

output "certificate_arn" {
  value = module.root.outputs.certificate_arn
}

output "cloudfront_id" {
  value = module.root.outputs.cloudfront_id
}

output "bucket_name" {
  value = module.root.outputs.s3_bucket
}
