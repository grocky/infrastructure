resource "aws_acm_certificate" "certificate2" {
  domain_name               = "*.${var.root_domain_name}"
  validation_method         = "DNS"
  subject_alternative_names = ["${var.root_domain_name}"]

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name        = "wildcard.rockygray.com"
    Env         = "prod"
    Application = "www.rockygray.com"
  }
}

resource "aws_route53_record" "cert_validation" {
  name    = "${aws_acm_certificate.certificate2.domain_validation_options.0.resource_record_name}"
  type    = "${aws_acm_certificate.certificate2.domain_validation_options.0.resource_record_type}"
  zone_id = "${aws_route53_zone.zone.zone_id}"
  records = ["${aws_acm_certificate.certificate2.domain_validation_options.0.resource_record_value}"]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "certificate" {
  certificate_arn         = "${aws_acm_certificate.certificate2.arn}"
  validation_record_fqdns = ["${aws_route53_record.cert_validation.fqdn}"]
}
