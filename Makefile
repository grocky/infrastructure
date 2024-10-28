.DEFAULT_GOAL := help

TF_MODULES := $(shell find . -name "*.tf" -exec dirname {} \; | grep -v '\.terraform' | uniq)
HTML_FILES := $(addsuffix /graph.html, $(TF_MODULES))
SVG_FILES := $(addsuffix /graph.svg, $(TF_MODULES))

help: ## Print this help message
	@awk -F ':|##' '/^[^\t].+?:.*?##/ { printf "${GREEN}%-20s${NC}%s\n", $$1, $$NF }' $(MAKEFILE_LIST)

all-graph: $(HTML_FILES) $(SVG_FILES)

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
