variable "env" {
  default = "prod"
}

variable "region" {
  default = "us-east-1"
}

output "nameservers" {
  value = aws_route53_zone.zone.name_servers
}

output "zone_id" {
  value = aws_route53_zone.zone.zone_id
}
