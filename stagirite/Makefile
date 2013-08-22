BASE_DIR=`pwd`
SRC_DIR=${BASE_DIR}/src
SCRIPT_DIR=${BASE_DIR}/scripts
TEMPLATE_DIR=${BASE_DIR}/templates
JS_DIR=${BASE_DIR}/js

all: compile_templates combine

compile_templates:
	rm -rf ${TEMPLATE_DIR}/templates.js
	${SCRIPT_DIR}/compile_js_templates ${TEMPLATE_DIR}/*.html > ${TEMPLATE_DIR}/templates.js

combine:
	cat ${TEMPLATE_DIR}/templates.js \
		${JS_DIR}/bookmarklet.js > ${JS_DIR}/all.js
	@echo "Successfully combined all JS files"

