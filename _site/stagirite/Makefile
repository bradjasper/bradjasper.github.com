BASE_DIR=`pwd`
SRC_DIR=${BASE_DIR}/src
SCRIPT_DIR=${BASE_DIR}/scripts
TEMPLATE_DIR=${BASE_DIR}/templates
JS_DIR=${BASE_DIR}/js

all:
	@echo "Making all"

development:
	@echo "Switching links to development"
	sed -i '' 's/bradjasper\.com/localhost:8000/g' js/*.js
	sed -i '' 's/bradjasper\.com/localhost:8000/g' css/*.css
	sed -i '' 's/bradjasper\.com/localhost:8000/g' *.html

production:
	@echo "Switching links to production"
	sed -i '' 's/localhost:8000/bradjasper\.com/g' js/*.js
	sed -i '' 's/localhost:8000/bradjasper\.com/g' css/*.css
	sed -i '' 's/localhost:8000/bradjasper\.com/g' *.html
