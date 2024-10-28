.DEFAULT_GOAL := help

TF_MODULES := $(shell find . -name "*.tf" -exec dirname {} \; | grep -v '\.terraform' | uniq)
HTML_FILES := $(addsuffix /graph.html, $(TF_MODULES))
SVG_FILES := $(addsuffix /graph.svg, $(TF_MODULES))
README_FILES := $(addsuffix /README.md, $(TF_MODULES))

help: ## Print this help message
	@awk -F ':|##' '/^[^\t].+?:.*?##/ { printf "${GREEN}%-20s${NC}%s\n", $$1, $$NF }' $(MAKEFILE_LIST)

list-modules: ## list all terraform modules in this repo
	@echo $(TF_MODULES) | tr ' ' '\n'

# all-graph: should only be used to batch update graph images if necessary.
all-graph: $(HTML_FILES) $(SVG_FILES)

# all-docs: should only be used to batch update module documentation if necessary.
all-docs:
	./scripts/pre-commit-generate-docs.sh $(TF_MODULES)

%/README.md: %/*.tf modules/*/*.tf %/graph.svg
	./scripts/pre-commit-generate-docs.sh $(shell dirname $@)

%/graph.dot: %/*.tf modules/*/*.tf
	cd $(shell dirname $@); \
	terraform graph > $(shell basename $@);

%/graph.svg: %/graph.dot
	dot -Tsvg $< -o $@

%/graph.html: %/graph.dot
	<$< terraform-graph-beautifier --output-type=cyto-html > $@

remote-state-init: ## Initialize remote-state
	@cd remote-state; terraform init

remote-state-plan: ## Plan remote-state
	@cd remote-state; terraform plan

remote-state-apply: ## Apply remote-state
	@cd remote-state; terraform apply

GREEN  := $(shell tput -Txterm setaf 2)
NC	   := $(shell tput -Txterm sgr0)
