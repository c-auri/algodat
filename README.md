# algodat

## Getting started
To start working on the project do the following:

1. Install nvm and use the lts version of node using the [TOP instructions](https://www.theodinproject.com/lessons/foundations-installing-node-js).
1. Clone this project to your machine.
1. In the root directory of this repository, run `npm i`.
1. If everything went well, you should be able to use `npm test` to run the tests once and `npm run watch` to keep the test suite running as you write new code.

## Pre-commit hooks
This project uses [Husky](https://typicode.github.io/husky/) to run the linter and the tests before every commit. They must pass for the commit to be applied, otherwise the commit will be aborted.

The pre-commit hook can be (bypassed)[https://typicode.github.io/husky/guide.html#bypass-hooks] if necessary, but this should not be done to intentionally commit bad code.

## Recommended plugins
For ease of development, the following VS Code plugins are recommended:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
- [Trailing Whitespace](https://marketplace.visualstudio.com/items?itemName=jkiviluoto.tws)