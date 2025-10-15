
## Requirements

No requirements.

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 6.16.0 |

## Modules

No modules.

## Resources

| Name | Type | File |
|------|------|------|
| [aws_iam_policy.eq_data_expansion_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) | resource | (equity-quotient/iam.tf#21) |
| [aws_iam_user.aliza](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_user) | resource | (equity-quotient/iam.tf#11) |
| [aws_iam_user.claire](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_user) | resource | (equity-quotient/iam.tf#2) |
| [aws_iam_user_policy_attachment.aliza_eq_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_user_policy_attachment) | resource | (equity-quotient/iam.tf#60) |
| [aws_iam_user_policy_attachment.claire_eq_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_user_policy_attachment) | resource | (equity-quotient/iam.tf#54) |
| [aws_s3_bucket.eq-data-expansion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource | (equity-quotient/s3.tf#1) |
| [aws_s3_bucket_policy.eq-data-expansion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) | resource | (equity-quotient/s3.tf#31) |
| [aws_s3_bucket_public_access_block.eq-data-expansion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource | (equity-quotient/s3.tf#22) |
| [aws_s3_bucket_public_access_block.state](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource | (equity-quotient/s3.tf#85) |
| [aws_s3_bucket_versioning.eq-data-expansion](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning) | resource | (equity-quotient/s3.tf#14) |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_env"></a> [env](#input\_env) | The environment to create resources in. | `string` | `"dev"` | no |
| <a name="input_region"></a> [region](#input\_region) | The AWS region to create resources in. | `string` | `"us-east-1"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_s3_bucket_arn"></a> [s3\_bucket\_arn](#output\_s3\_bucket\_arn) | n/a |
| <a name="output_s3_bucket_name"></a> [s3\_bucket\_name](#output\_s3\_bucket\_name) | n/a |
