GREEN  := $(shell tput -Txterm setaf 2)
NC     := $(shell tput -Txterm sgr0)

help: ## Print this help message
	@awk -F ':|##' '/^[^\t].+?:.*?##/ { printf "${GREEN}%-20s${NC}%s\n", $$1, $$NF }' $(MAKEFILE_LIST) | \
        sort

BUILD_DIR=build
BUCKET_NAME=www.rockygray.com

infra-init: ## Initialize infrastructure
	cd infrastructure; terraform init

infra-plan: ## See terraform plan
	cd infrastructure; terraform plan

infra-apply: ## Apply terraform
	cd infrastructure; terraform apply

clean: ## Cleanup the application
	rm -rf dist/ $(BUILD_DIR)

package: ## Package the application
	npm run build

publish: build ## Publish the application to S3
	aws s3 sync --cache-control 'max-age=604800' --exclude index.html build/ s3://$(BUCKET_NAME)
	aws s3 sync --cache-control 'no-cache' build/ s3://$(BUCKET_NAME)
