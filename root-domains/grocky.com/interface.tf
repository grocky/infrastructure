variable "env" {
  default = "prod"
}

variable "region" {
  default = "us-east-1"
}

output "root_domain" {
  value = module.root.outputs
}
