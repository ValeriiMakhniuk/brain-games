install:
	npm install;
start:
	npx babel-node src/bin/brain-games.js
lint:
	npx eslint .
publish:
	npm publish --dry-run