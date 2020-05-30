variable "root_domain_name" {}

output "outputs" {
  value = {
    root_zone_id    = aws_route53_zone.zone.zone_id
    nameservers     = aws_route53_zone.zone.name_servers
    certificate_arn = aws_acm_certificate.certificate.arn
    cloudfront_id   = aws_cloudfront_distribution.root_distribution.id
    s3_bucket       = aws_s3_bucket.root.id
  }
}
