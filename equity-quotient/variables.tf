variable "region" {
  description = "The AWS region to create resources in."
  type        = string
  default     = "us-east-1"
}

variable "env" {
  description = "The environment to create resources in."
  type        = string
  default     = "dev"
}
