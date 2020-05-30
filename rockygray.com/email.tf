# SES Domain Identity
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

# SES DKIM
# https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-authentication-dkim.html
resource "aws_ses_domain_dkim" "rockygray" {
  domain = aws_ses_domain_identity.rockygray.domain
}

resource "aws_route53_record" "rockygray_amazonses_dkim_record" {
  count   = 3
  zone_id = module.root.outputs.root_zone_id
  name = format(
    "%s._domainkey.%s",
    element(aws_ses_domain_dkim.rockygray.dkim_tokens, count.index),
    aws_ses_domain_identity.rockygray.domain
  )
  type    = "CNAME"
  ttl     = "600"
  records = ["${element(aws_ses_domain_dkim.rockygray.dkim_tokens, count.index)}.dkim.amazonses.com"]
}

# Mail Send and Receive
# https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html
resource "aws_ses_domain_mail_from" "rockygray" {
  domain           = aws_ses_domain_identity.rockygray.domain
  mail_from_domain = "mail.${aws_ses_domain_identity.rockygray.domain}"
}

locals {
  spf_domain_names = [
    aws_ses_domain_mail_from.rockygray.mail_from_domain,
    aws_ses_domain_identity.rockygray.domain,
  ]
}

resource "aws_route53_record" "rockygray_ses_domain_spf_txt" {
  count   = length(local.spf_domain_names)
  zone_id = module.root.outputs.root_zone_id
  name    = element(local.spf_domain_names, count.index)
  type    = "TXT"
  ttl     = "600"
  records = ["v=spf1 include:amazonses.com -all"]
}

resource "aws_route53_record" "rockygray_ses_domain_mail_from_mx" {
  zone_id = module.root.outputs.root_zone_id
  name    = aws_ses_domain_mail_from.rockygray.mail_from_domain
  type    = "MX"
  ttl     = "600"
  records = ["10 feedback-smtp.${var.region}.amazonses.com"]
}

resource "aws_route53_record" "rockygray_ses_domain_receive_mx" {
  zone_id = module.root.outputs.root_zone_id
  name    = aws_ses_domain_identity.rockygray.domain
  type    = "MX"
  ttl     = "600"
  records = ["10 inbound-smtp.${var.region}.amazonses.com"]
}

# DMARC
# (https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-authentication-dmarc.html)
resource "aws_route53_record" "rockygray_ses_domain_dmarc_txt" {
  zone_id = module.root.outputs.root_zone_id
  name    = "_dmarc.${aws_ses_domain_identity.rockygray.domain}"
  type    = "TXT"
  ttl     = "600"
  records = ["v=DMARC1;p=quarantine;rua=mailto:dmarcreports@${aws_ses_domain_identity.rockygray.domain};"]
}
