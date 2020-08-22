GREEN  := $(shell tput -Txterm setaf 2)
NC     := $(shell tput -Txterm sgr0)

build_sources := $(shell find src \( -name "*.js" -o -name "*.css" \))

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

.PHONY=start
start: ## Start the dev server
	npm run start

clean: ## Cleanup the application
	rm -rf dist/ $(BUILD_DIR)

FAVICONS := public/android-chrome-*.png public/apple-touch-icon.png public/favicon*.png public/mstile-*.png

favicons: $(FAVICONS) ## Generate favicons
$(FAVICONS):  public/img/logo.svg
	npx real-favicon generate faviconDescription.json faviconData.json public
build: $(build_sources) favicons ## Package the application
	npm run build

.PHONY=publish
publish: build ## Publish the application to S3
	aws s3 sync --cache-control 'max-age=604800' --exclude index.html build/ s3://$(BUCKET_NAME)
	aws s3 sync --cache-control 'no-cache' build/ s3://$(BUCKET_NAME)
