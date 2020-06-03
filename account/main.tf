terraform {
  backend "s3" {
    encrypt        = true
    bucket         = "grocky-tfstate"
    dynamodb_table = "tfstate-lock"
    region         = "us-east-1"
    key            = "account/terraform.tfstate"
  }
}

provider "aws" {
  region = var.region
}

# The AWS account id
data "aws_caller_identity" "current" {
}

resource "aws_ses_receipt_rule_set" "main" {
  rule_set_name = "primary-rules"
}

resource "aws_ses_active_receipt_rule_set" "main" {
  rule_set_name = aws_ses_receipt_rule_set.main.rule_set_name
}

resource "aws_s3_bucket" "aws_logs" {
  bucket        = var.log_bucket_name
  acl           = "log-delivery-write"
  region        = var.region
  policy        = data.aws_iam_policy_document.main.json
  force_destroy = false

  lifecycle_rule {
    id      = "expire_all_logs"
    prefix  = "/*"
    enabled = true

    expiration {
      days = 90
    }
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  tags = {
    Name = "rockygray-s3-logs"
    Env  = "prod"
    App  = "all"
  }
}

locals {
  pre_log_bucket_arn = "arn:aws:s3:::${var.log_bucket_name}"
}

data "aws_iam_policy_document" "main" {
  statement {
    sid    = "cloudtrail-logs-get-bucket-acl"
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["cloudtrail.amazonaws.com"]
    }
    actions   = ["s3:GetBucketAcl"]
    resources = [local.pre_log_bucket_arn]
  }
  statement {
    sid    = "cloudtrail-logs-put-object"
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["cloudtrail.amazonaws.com"]
    }
    actions   = ["s3:PutObject"]
    resources = toset(formatlist("${local.pre_log_bucket_arn}/cloudtrail/%s/*", data.aws_caller_identity.current.account_id))
    condition {
      test     = "StringEquals"
      variable = "s3:x-amz-acl"
      values   = ["bucket-owner-full-control"]
    }
  }
  statement {
    sid    = "cloudwatch-logs-get-bucket-acl"
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["logs.${var.region}.amazonaws.com"]
    }
    actions   = ["s3:GetBucketAcl"]
    resources = [local.pre_log_bucket_arn]
  }

  statement {
    sid    = "cloudwatch-logs-put-object"
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["logs.${var.region}.amazonaws.com"]
    }
    actions = ["s3:PutObject"]
    condition {
      test     = "StringEquals"
      variable = "s3:x-amz-acl"
      values   = ["bucket-owner-full-control"]
    }
    resources = ["${local.pre_log_bucket_arn}/cloudwatch/*"]
  }
  statement {
    sid    = "enforce-tls-requests-only"
    effect = "Deny"
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    actions = ["s3:*"]
    resources = [
      local.pre_log_bucket_arn,
      "${local.pre_log_bucket_arn}/*"
    ]
    condition {
      test     = "Bool"
      variable = "aws:SecureTransport"
      values   = ["false"]
    }
  }
}
