variable "user_names" = {
  default           = {
    "grocky" = {
      path            = "/"
      force_destroy   = true
    }
  }
}

resource "aws_iam_user" "grocky" {
  name = "grocky"
  path = "/"
}
