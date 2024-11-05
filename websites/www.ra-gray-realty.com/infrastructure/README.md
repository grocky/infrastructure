# Infrastructure

The infrastructure for [www.ra-gray-realty.com](https://www.ra-gray-realty.com)

## Graph

![](./graph.svg)
## Requirements

No requirements.

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 4.32.0 |
| <a name="provider_terraform"></a> [terraform](#provider\_terraform) | n/a |

## Modules

No modules.

## Resources

| Name | Type | File |
|------|------|------|
| [aws_cloudfront_distribution.www_distribution](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_distribution) | resource | (websites/www.ra-gray-realty.com/infrastructure/cloudfront.tf#1) |
| [aws_route53_record.www](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route53_record) | resource | (websites/www.ra-gray-realty.com/infrastructure/dns.tf#1) |
| [aws_s3_bucket.www](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource | (websites/www.ra-gray-realty.com/infrastructure/s3.tf#1) |
| [aws_s3_bucket_acl.www](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) | resource | (websites/www.ra-gray-realty.com/infrastructure/s3.tf#21) |
| [aws_s3_bucket_policy.allow_access_from_anyone](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) | resource | (websites/www.ra-gray-realty.com/infrastructure/s3.tf#26) |
| [aws_s3_bucket_versioning.www](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning) | resource | (websites/www.ra-gray-realty.com/infrastructure/s3.tf#44) |
| [aws_s3_bucket_website_configuration.www](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_website_configuration) | resource | (websites/www.ra-gray-realty.com/infrastructure/s3.tf#11) |
| [terraform_remote_state.root](https://registry.terraform.io/providers/hashicorp/terraform/latest/docs/data-sources/remote_state) | data source | (websites/www.ra-gray-realty.com/infrastructure/main.tf#15) |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_root_domain_name"></a> [root\_domain\_name](#input\_root\_domain\_name) | n/a | `string` | `"ra-gray-realty.com"` | no |
| <a name="input_www_domain_name"></a> [www\_domain\_name](#input\_www\_domain\_name) | n/a | `string` | `"www.ra-gray-realty.com"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_cloudfront_url"></a> [cloudfront\_url](#output\_cloudfront\_url) | n/a |
| <a name="output_cloudfront_www_id"></a> [cloudfront\_www\_id](#output\_cloudfront\_www\_id) | n/a |
| <a name="output_s3_website_url"></a> [s3\_website\_url](#output\_s3\_website\_url) | n/a |
| <a name="output_site_url"></a> [site\_url](#output\_site\_url) | n/a |
