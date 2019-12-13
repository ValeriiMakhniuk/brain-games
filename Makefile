install:
	npm install;
start:
	npx babel-node src/bin/brain-prime.js
lint:
	npx eslint .
publish:
	npm publish --dry-run