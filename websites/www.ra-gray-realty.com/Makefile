BUCKET_NAME=www.ra-gray-realty.com

GREEN := $(shell tput -Txterm setaf 2)
NC    := $(shell tput -Txterm sgr0)

help: ## print this help message
	@awk -F ':|##' '/^[^\t].+?:.*?##/ { printf "${GREEN}%-20s${NC}%s\n", $$1, $$NF }' $(MAKEFILE_LIST) | sort

.PHONY=start
start: ## Start the dev server
	npm run start

infra-init: ## Initialize infrastructure
	cd infrastructure; terraform init

infra-plan: ## See terraform plan
	cd infrastructure; terraform plan

infra-apply: ## Apply terraform
	cd infrastructure; terraform apply

.PHONY=publish
publish: ## Publish the application to S3
	aws s3 sync --cache-control 'max-age=604800' --exclude index.html public/ s3://$(BUCKET_NAME)
	aws s3 sync --cache-control 'no-cache' public/ s3://$(BUCKET_NAME)

