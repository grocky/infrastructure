
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 0.12 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | >= 2.15.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 5.73.0 |

## Modules

No modules.

## Resources

| Name | Type | File |
|------|------|------|
| [aws_acm_certificate.certificate](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/acm_certificate) | resource | (modules/root-domain/certificate.tf#1) |
| [aws_acm_certificate_validation.certificate](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/acm_certificate_validation) | resource | (modules/root-domain/certificate.tf#36) |
| [aws_cloudfront_distribution.root_distribution](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_distribution) | resource | (modules/root-domain/cloudfront.tf#1) |
| [aws_route53_record.cert_validation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) | resource | (modules/root-domain/certificate.tf#17) |
| [aws_route53_record.root](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) | resource | (modules/root-domain/routing.tf#11) |
| [aws_route53_zone.zone](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_zone) | resource | (modules/root-domain/routing.tf#1) |
| [aws_s3_bucket.root](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource | (modules/root-domain/s3.tf#1) |
| [aws_s3_bucket_acl.root](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) | resource | (modules/root-domain/s3.tf#36) |
| [aws_s3_bucket_ownership_controls.root](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_ownership_controls) | resource | (modules/root-domain/s3.tf#20) |
| [aws_s3_bucket_policy.allow_access_from_anyone](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) | resource | (modules/root-domain/s3.tf#46) |
| [aws_s3_bucket_public_access_block.root](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource | (modules/root-domain/s3.tf#27) |
| [aws_s3_bucket_website_configuration.https_redirect](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_website_configuration) | resource | (modules/root-domain/s3.tf#12) |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_root_domain_name"></a> [root\_domain\_name](#input\_root\_domain\_name) | n/a | `any` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_outputs"></a> [outputs](#output\_outputs) | n/a |
