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
