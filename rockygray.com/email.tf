resource "aws_ses_domain_identity" "rockygray" {
  domain = var.domain
}

resource "aws_route53_record" "rockygray_amazonses_verification_record" {
  zone_id = module.root.outputs.root_zone_id
  name    = "_amazonses.${aws_ses_domain_identity.rockygray.id}"
  type    = "TXT"
  ttl     = "600"
  records = [aws_ses_domain_identity.rockygray.verification_token]
}

resource "aws_ses_domain_identity_verification" "rockygray_verification" {
  domain = aws_ses_domain_identity.rockygray.id

  depends_on = [aws_route53_record.rockygray_amazonses_verification_record]
}
