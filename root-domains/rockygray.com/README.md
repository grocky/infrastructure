# rockygray.com Infrastructure

This is the sets up the wild card certificate and apex domain for rockygray.com

## Infrastructure Graph

![terraform graph](./graph.svg)
## Requirements

No requirements.

## Providers

No providers.

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_root"></a> [root](#module\_root) | ../../modules/root-domain | n/a |

## Resources

No resources.

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_env"></a> [env](#input\_env) | n/a | `string` | `"prod"` | no |
| <a name="input_region"></a> [region](#input\_region) | n/a | `string` | `"us-east-1"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_root_domain"></a> [root\_domain](#output\_root\_domain) | n/a |
