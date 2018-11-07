BUILD_DIR=build
BUCKET_NAME=www.rockygray.com

tf-init:
	cd infrastructure; terraform init

tf-plan:
	cd infrastructure; terraform plan

tf-apply:
	cd infrastructure; terraform apply

clean:
	@rm -rf dist/ $(BUILD_DIR)

build:
	npm run build

publish: build
	cd $(BUILD_DIR); aws s3 sync . s3://$(BUCKET_NAME)

