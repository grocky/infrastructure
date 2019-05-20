GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
BLUE   := $(shell tput -Txterm setaf 4)
WHITE  := $(shell tput -Txterm setaf 7)
NC     := $(shell tput -Txterm sgr0)

help: ## Print this help message
	@awk -F ':|##' '/^[^\t].+?:.*?##/ { printf "${BLUE}%-20s${NC}%s\n", $$1, $$NF }' $(MAKEFILE_LIST) | \
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

build: ## Build the application
	npm run build

publish: build ## Publish the application to S3
	cd $(BUILD_DIR); aws s3 sync . s3://$(BUCKET_NAME)
