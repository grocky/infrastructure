remote-state-init: ## Initialize remote-state
	@cd remote-state; terraform init

remote-state-plan: ## Plan remote-state
	@cd remote-state; terraform plan

remote-state-apply: ## Apply remote-state
	@cd remote-state; terraform apply

GREEN  := $(shell tput -Txterm setaf 2)
NC     := $(shell tput -Txterm sgr0)

help: ## Print this help message
	@awk -F ':|##' '/^[^\t].+?:.*?##/ { printf "${GREEN}%-20s${NC}%s\n", $$1, $$NF }' $(MAKEFILE_LIST) | \
        sort

