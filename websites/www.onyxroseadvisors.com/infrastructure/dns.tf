resource "aws_route53_record" "www" {
  zone_id = data.terraform_remote_state.root.outputs.root_domain.root_zone_id
  name    = var.www_domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.www_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.www_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "mx" {
  zone_id = data.terraform_remote_state.root.outputs.root_domain.root_zone_id
  name    = ""
  type    = "MX"
  records = [
    "10 fwd1.porkbun.com",
    "20 fwd2.porkbun.com",
  ]
  ttl = 3600
}

resource "aws_route53_record" "txt" {
  zone_id = data.terraform_remote_state.root.outputs.root_domain.root_zone_id
  name    = ""
  type    = "TXT"
  records = [
    "v=spf1 mx include:_spf.porkbun.com ~all",
  ]
  ttl = 3600
}

resource "aws_route53_record" "dkim" {
  zone_id = data.terraform_remote_state.root.outputs.root_domain.root_zone_id
  name    = "default._domainkey"
  type    = "TXT"
  records = [
    "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDCZ5UraY4WtaXvihqjOFhw0NQ5UI+85tQm7ojI6OIy8DByT/HQSbynWMpyHj5WrCRrJR9Bal2Qyr6IkGy5LxgdgUDbJDQkg9olFzQkEbcyFNMzNl1chPqKJkxKer07AjND0fD5KeufNaJ4iuPK4Ci7V/shVY3AInQDKJeOgjlZaQIDAQAB",
  ]
  ttl = 300
}

resource "aws_route53_record" "dmarc" {
  zone_id = data.terraform_remote_state.root.outputs.root_domain.root_zone_id
  name    = "_dmarc"
  type    = "TXT"
  records = [
    "v=DMARC1; p=quarantine; rua=mailto:25f8c5e6@mxtoolbox.dmarc-report.com; ruf=mailto:25f8c5e6@forensics.dmarc-report.com; fo=1",
  ]
  ttl = 300
}
