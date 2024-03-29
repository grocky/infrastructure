resource "aws_acm_certificate" "certificate" {
  domain_name               = "*.${var.root_domain_name}"
  validation_method         = "DNS"
  subject_alternative_names = [var.root_domain_name]

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name        = "wildcard.${var.root_domain_name}"
    Env         = "prod"
    Application = "www.${var.root_domain_name}"
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {

    for dvo in aws_acm_certificate.certificate.domain_validation_options : dvo.domain_name => {

      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = aws_route53_zone.zone.zone_id
}

resource "aws_acm_certificate_validation" "certificate" {
  certificate_arn         = aws_acm_certificate.certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]

  timeouts {
    create = "120m"
  }
}
