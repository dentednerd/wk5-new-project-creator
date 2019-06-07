const userInput = process.argv;
const path = userInput[2];

module.exports = `{
  "name": "${path}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha ./spec",
    "lint": "eslint ./",
    "precommit": "npm run lint && npm test"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "chai": "^4.0.2",
    "eslint": "^3.19.0",
    "eslint-config-standard": "^12.0.0",
    "eslint-plugin-import": "^2.17.3",
    "eslint-plugin-node": "^9.1.0",
    "eslint-plugin-promise": "^4.1.1",
    "eslint-plugin-standard": "^4.0.0",
    "husky": "^0.13.4",
    "mocha": "^3.4.2"
  },
  "eslintConfig": {
    "extends": "standard"
  }
}`;

