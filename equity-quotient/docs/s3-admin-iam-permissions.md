# IAM Permissions for Secure S3 Management

This document outlines the IAM permissions required for the user `arn:aws:iam::728076171909:user/rocky` to perform secure S3 bucket management and user administration.

## Overview

The following permissions enable:
- Creating and managing S3 buckets
- Configuring bucket policies and security settings
- Creating and managing IAM users for bucket access
- Managing access keys for users
- Implementing security best practices

## Required IAM Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3BucketManagement",
      "Effect": "Allow",
      "Action": [
        "s3:CreateBucket",
        "s3:DeleteBucket",
        "s3:ListBucket",
        "s3:ListAllMyBuckets",
        "s3:GetBucketLocation",
        "s3:GetBucketVersioning",
        "s3:PutBucketVersioning",
        "s3:GetBucketTagging",
        "s3:PutBucketTagging",
        "s3:GetBucketLogging",
        "s3:PutBucketLogging",
        "s3:GetEncryptionConfiguration",
        "s3:PutEncryptionConfiguration",
        "s3:GetLifecycleConfiguration",
        "s3:PutLifecycleConfiguration",
        "s3:GetReplicationConfiguration",
        "s3:PutReplicationConfiguration"
      ],
      "Resource": [
        "arn:aws:s3:::*"
      ]
    },
    {
      "Sid": "S3ObjectManagement",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObjectVersion",
        "s3:DeleteObjectVersion",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl"
      ],
      "Resource": [
        "arn:aws:s3:::*/*"
      ]
    },
    {
      "Sid": "S3BucketPolicyManagement",
      "Effect": "Allow",
      "Action": [
        "s3:GetBucketPolicy",
        "s3:PutBucketPolicy",
        "s3:DeleteBucketPolicy",
        "s3:GetBucketPolicyStatus"
      ],
      "Resource": [
        "arn:aws:s3:::*"
      ]
    },
    {
      "Sid": "S3PublicAccessBlockManagement",
      "Effect": "Allow",
      "Action": [
        "s3:GetBucketPublicAccessBlock",
        "s3:PutBucketPublicAccessBlock",
        "s3:GetAccountPublicAccessBlock",
        "s3:PutAccountPublicAccessBlock"
      ],
      "Resource": [
        "arn:aws:s3:::*"
      ]
    },
    {
      "Sid": "S3ACLManagement",
      "Effect": "Allow",
      "Action": [
        "s3:GetBucketAcl",
        "s3:PutBucketAcl",
        "s3:GetBucketOwnershipControls",
        "s3:PutBucketOwnershipControls"
      ],
      "Resource": [
        "arn:aws:s3:::*"
      ]
    },
    {
      "Sid": "IAMUserManagement",
      "Effect": "Allow",
      "Action": [
        "iam:CreateUser",
        "iam:DeleteUser",
        "iam:GetUser",
        "iam:ListUsers",
        "iam:UpdateUser",
        "iam:TagUser",
        "iam:UntagUser",
        "iam:ListUserTags"
      ],
      "Resource": [
        "arn:aws:iam::728076171909:user/*"
      ]
    },
    {
      "Sid": "IAMAccessKeyManagement",
      "Effect": "Allow",
      "Action": [
        "iam:CreateAccessKey",
        "iam:DeleteAccessKey",
        "iam:ListAccessKeys",
        "iam:UpdateAccessKey",
        "iam:GetAccessKeyLastUsed"
      ],
      "Resource": [
        "arn:aws:iam::728076171909:user/*"
      ]
    },
    {
      "Sid": "IAMPolicyManagement",
      "Effect": "Allow",
      "Action": [
        "iam:CreatePolicy",
        "iam:DeletePolicy",
        "iam:GetPolicy",
        "iam:GetPolicyVersion",
        "iam:ListPolicies",
        "iam:ListPolicyVersions",
        "iam:CreatePolicyVersion",
        "iam:DeletePolicyVersion",
        "iam:SetDefaultPolicyVersion",
        "iam:TagPolicy",
        "iam:UntagPolicy"
      ],
      "Resource": [
        "arn:aws:iam::728076171909:policy/*"
      ]
    },
    {
      "Sid": "IAMPolicyAttachment",
      "Effect": "Allow",
      "Action": [
        "iam:AttachUserPolicy",
        "iam:DetachUserPolicy",
        "iam:ListAttachedUserPolicies",
        "iam:ListUserPolicies",
        "iam:PutUserPolicy",
        "iam:DeleteUserPolicy",
        "iam:GetUserPolicy"
      ],
      "Resource": [
        "arn:aws:iam::728076171909:user/*"
      ]
    },
    {
      "Sid": "IAMReadOnlyAccess",
      "Effect": "Allow",
      "Action": [
        "iam:GetAccountSummary",
        "iam:ListAccountAliases",
        "iam:GetAccountPasswordPolicy"
      ],
      "Resource": "*"
    },
    {
      "Sid": "STSGetCallerIdentity",
      "Effect": "Allow",
      "Action": [
        "sts:GetCallerIdentity"
      ],
      "Resource": "*"
    }
  ]
}
```

## Optional Enhanced Security Permissions

For additional security features, consider adding:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3ServerSideEncryption",
      "Effect": "Allow",
      "Action": [
        "kms:CreateKey",
        "kms:DescribeKey",
        "kms:ListKeys",
        "kms:CreateAlias",
        "kms:DeleteAlias",
        "kms:UpdateAlias",
        "kms:ListAliases",
        "kms:TagResource",
        "kms:UntagResource",
        "kms:EnableKeyRotation",
        "kms:DisableKeyRotation",
        "kms:GetKeyRotationStatus",
        "kms:PutKeyPolicy",
        "kms:GetKeyPolicy"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CloudTrailForAudit",
      "Effect": "Allow",
      "Action": [
        "cloudtrail:LookupEvents",
        "cloudtrail:GetEventSelectors"
      ],
      "Resource": "*"
    },
    {
      "Sid": "S3AccessAnalyzer",
      "Effect": "Allow",
      "Action": [
        "access-analyzer:ListAnalyzers",
        "access-analyzer:GetAnalyzer",
        "access-analyzer:ListFindings"
      ],
      "Resource": "*"
    }
  ]
}
```

## Security Best Practices

### For S3 Buckets:
1. **Always enable versioning** for data recovery
2. **Enable encryption at rest** using SSE-S3 or SSE-KMS
3. **Block public access** by default (all 4 settings)
4. **Enforce HTTPS/TLS** using bucket policies with `aws:SecureTransport` condition
5. **Enable logging** for audit trails
6. **Use least privilege** in bucket policies
7. **Enable MFA Delete** for critical buckets
8. **Implement lifecycle policies** for cost optimization

### For IAM Users:
1. **Never embed access keys** in code or version control
2. **Rotate access keys** regularly (90 days recommended)
3. **Use temporary credentials** when possible (STS AssumeRole)
4. **Enable MFA** for sensitive operations
5. **Apply least privilege** principle to policies
6. **Use IAM Access Analyzer** to identify overly permissive policies
7. **Tag users and policies** for better organization and auditing
8. **Monitor access key usage** regularly

### For Access Keys:
1. **Create access keys only when necessary** - prefer using IAM roles with STS
2. **Store keys securely** using tools like:
   - AWS Secrets Manager
   - AWS Systems Manager Parameter Store (with SecureString)
   - HashiCorp Vault
   - Environment variables (never in code)
3. **Limit access key permissions** to specific resources
4. **Set up CloudWatch alerts** for unusual access patterns
5. **Delete unused access keys** immediately

## Creating Your Access Keys

Once you have these permissions, you can create access keys:

### Via AWS Console:
1. Sign in to AWS Console
2. Go to IAM > Users > rocky
3. Select "Security credentials" tab
4. Click "Create access key"
5. Choose use case (e.g., "CLI")
6. Download and store securely

### Via AWS CLI (if you already have temporary access):
```bash
aws iam create-access-key --user-name rocky
```

### Store in AWS CLI profile:
```bash
aws configure --profile rocky
# Enter Access Key ID
# Enter Secret Access Key
# Enter region (e.g., us-east-1)
# Enter output format (json)
```

## Terraform Implementation Example

You can request that an administrator create a policy and attach it to your user:

```hcl
data "aws_iam_user" "rocky" {
  user_name = "rocky"
}

resource "aws_iam_policy" "rocky_s3_admin" {
  name        = "RockyS3AdminPolicy"
  description = "S3 and IAM management permissions for Rocky"

  policy = jsonencode({
    # Paste the policy JSON from above
  })
}

resource "aws_iam_user_policy_attachment" "rocky_s3_admin" {
  user       = data.aws_iam_user.rocky.user_name
  policy_arn = aws_iam_policy.rocky_s3_admin.arn
}
```

## Minimal Permissions (If Full Admin Not Granted)

If you only need to manage specific buckets and users, use this more restrictive policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ManageSpecificBuckets",
      "Effect": "Allow",
      "Action": [
        "s3:*"
      ],
      "Resource": [
        "arn:aws:s3:::my-app-*",
        "arn:aws:s3:::my-app-*/*"
      ]
    },
    {
      "Sid": "ManageAppUsers",
      "Effect": "Allow",
      "Action": [
        "iam:CreateUser",
        "iam:DeleteUser",
        "iam:GetUser",
        "iam:CreateAccessKey",
        "iam:DeleteAccessKey",
        "iam:ListAccessKeys",
        "iam:AttachUserPolicy",
        "iam:DetachUserPolicy",
        "iam:CreatePolicy",
        "iam:DeletePolicy",
        "iam:GetPolicy"
      ],
      "Resource": [
        "arn:aws:iam::728076171909:user/app-*",
        "arn:aws:iam::728076171909:policy/app-*"
      ]
    },
    {
      "Sid": "RequiredReadAccess",
      "Effect": "Allow",
      "Action": [
        "s3:ListAllMyBuckets",
        "iam:ListUsers",
        "iam:ListPolicies",
        "sts:GetCallerIdentity"
      ],
      "Resource": "*"
    }
  ]
}
```

## Next Steps

1. **Request these permissions** from your AWS administrator
2. **Create access keys** for your user
3. **Configure AWS CLI** with your credentials
4. **Test permissions** by listing buckets: `aws s3 ls`
5. **Set up MFA** for additional security
6. **Document your infrastructure** using Terraform or CloudFormation
