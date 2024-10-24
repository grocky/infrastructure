resource "aws_route53_record" "verify" {
  zone_id = data.terraform_remote_state.root.outputs.root_domain.root_zone_id
  name    = "n844trhdr8ewwsk3yxtt"
  type    = "CNAME"
  ttl     = 300
  records = ["verify.squarespace.com"]
}

resource "aws_route53_record" "www" {
  zone_id = data.terraform_remote_state.root.outputs.root_domain.root_zone_id
  name    = var.www_domain_name
  type    = "CNAME"
  ttl     = 300

  records = ["ext-cust.squarespace.com"]
}

resource "aws_route53_record" "a" {
  zone_id = data.terraform_remote_state.root.outputs.root_domain.root_zone_id
  name    = ""
  type    = "A"
  ttl     = 300

  records = [
    "198.185.159.144",
    "198.185.159.145",
    "198.49.23.144",
    "198.49.23.145"
  ]
}

resource "aws_route53_record" "mx" {
  zone_id = data.terraform_remote_state.root.outputs.root_domain.root_zone_id
  name    = ""
  type    = "MX"
  records = [
    "0 onyxroseadvisors-com.mail.protection.outlook.com."
  ]
  ttl = 3600
}

resource "aws_route53_record" "txt" {
  zone_id = data.terraform_remote_state.root.outputs.root_domain.root_zone_id
  name    = ""
  type    = "TXT"
  records = [
    "v=spf1 include:spf.protection.outlook.com -all",
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
