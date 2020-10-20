resource "aws_route53_zone" "zone" {
  name = var.root_domain_name

  tags = {
    Name        = var.root_domain_name
    Env         = "prod"
    Application = "www.${var_root_domain_name}"
  }
}

resource "aws_route53_record" "root" {
  zone_id = aws_route53_zone.zone.zone_id

  // NOTE: name is blank here for the apex domain.
  name = ""
  type = "A"

  alias {
    name                   = aws_cloudfront_distribution.root_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.root_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

