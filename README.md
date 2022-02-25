# Smart Contracts Template Repo

This repository is a zero-install repository for Smart Contracts development. It's uses the Solidity compiler

# Setup Node and Yarn

Node is the tool used to run most of the development tools. It is typically used to run Javascript outside the browser and it is used by most of the Smart Contracts development tools.

Yarn is one of the package managers for Node and it will allow us to install dependencies for our project.

## Install nvm

-   Download and install `nvm`

```
$ curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh
$ chmod +x install_nvm.sh
$ ./install_nvm.sh
```

-   Restart terminal or source the new config with

```
$ source ~/.bash_profile
```

-   Check that the `nvm` command is installed with

```
$ command -v nvm
nvm
```

If it does not return nvm, the command was not installed properly

Reference: https://heynode.com/tutorial/install-nodejs-locally-nvm/

## Install Node

-   Install the LTS (Long Term Support) version of node

```
$ nvm install --lts
```

-   Verify that it worked

```
$ node --version
v16.14.0
$ which node
/home/user/.nvm/versions/node/v16.14.0/bin/node
```

Reference: https://heynode.com/tutorial/install-nodejs-locally-nvm/

## Install Yarn

-   Enable `corepack` from Node package

```
$ corepack enable
```

-   Check the installation

```
$ yarn --version
3.2.0
```

Reference: https://yarnpkg.com/getting-started/install

## Create a Yarn zero-install

-   Zero-installs allow for repositories to contain all files needed to start development without having to install anything. Create a `yarn` zero-install with:

```
$ yarn init -2
```

It will create several files and a _package.json_ with the project config

Reference: https://yarnpkg.com/getting-started/install

## Install yarn interactive-tools

-   These plugin adds some high-level commands to manage the project using graphical terminal interfaces

```
$ yarn plugin import interactive-tools
```

Reference: https://yarnpkg.com/features/plugins

# Setup Hardhat

Hardhat is the Smart Contracts development tool itself. It helps us manage the Solidity compiler, connecting to a local blockchain and deploying contracts to the real blockchains.

## Install Hardhat

```
$ yarn add -D hardhat
```

## Install Ethers for Hardhat

Ethers is one of the libraries that can be used to access the blockchain. It has an abstraction layer for contracts, wallets, signers, and so on

```
$ yarn add -D @nomiclabs/hardhat-ethers 'ethers@^5.0.0'
```

Reference: https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html

## Add Typescript support

Typescript is a typed Javascript. The typings help the development because they are checked and also the editors can show more information on functions and classes parameters.

```
$ yarn add -D ts-node typescript @types/node
```

Config file: [tsconfig.json](tsconfig.json)

Reference: https://hardhat.org/guides/typescript.html

## Install typechain for hardhat

Typechain will help generating typescript bindings for the Solidity contracts at compile time. Then this bindings can be used to access the contracts using typescript.

```
$ yarn add -D typechain @typechain/hardhat @typechain/ethers-v5 lodash
```

Reference: https://www.npmjs.com/package/@typechain/hardhat

# Add hardhat plugins

## Gas Reporter

A plugin that reports the amount of gas spent on each contract's functions. Useful to estimate deployment and operations cost

```
$ yarn add -D hardhat-gas-reporter
```

Reference: https://www.npmjs.com/package/hardhat-gas-reporter

## Contract Sizer

This plugin reports the size of each Solidity contract. Currently there is a limit on the contract size and if the contract goes above it, it will be rejected when trying to deploy it

```
$ yarn add -D hardhat-contract-sizer
```

Reference: https://www.npmjs.com/package/hardhat-contract-sizer

## Waffle Testing Framework

Waffle is a testing framework that uses _Chai_ and _Mocha_ and allows to write tests that can be run directly from _Hardhat_

```
$ yarn add -D @nomiclabs/hardhat-waffle 'ethereum-waffle@^3.0.0' chai chai-ethers-bn mocha @types/chai @types/mocha
```

Reference: https://hardhat.org/plugins/nomiclabs-hardhat-waffle.html

## Solidity Coverage

Useful to get statistics on the test coverage for your contracts. It will report the percentage of code covered and the uncovered lines

```
$ yarn add -D solidity-coverage shelljs
```

Config file: [.solcover.js](.solcover.js)

Reference: https://www.npmjs.com/package/solidity-coverage

# Prettier

This tool takes care of formatting your code in a proper way and keeping all code of the same language with the same format

```
$ yarn add -D prettier prettier-plugin-solidity
```

Config files: [.prettierignore](.prettierignore) and [.prettierrc.yaml](.prettierrc.yaml)

# Linting Tools

Linters are a special set of tools that help identifying bad syntax in languages like Javascript. In other cases like the linter of Solidity, the tool focuses on good practices and finding possible vulnerabilities in the code

## eslint

Install with its Prettier plugin as well

```
$ yarn add -D eslint eslint-config-prettier eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Config files: [.eslintignore](.eslintignore) and [.eslintrc.yaml](.eslintrc.yaml)

Reference: https://github.com/eslint/eslint#installation-and-usage

## solhint

Install with its Prettier plugin as well

```
$ yarn add -D solhint solhint-plugin-prettier
```

Config files: [.solhint.json](.solhint.json) and [.solhintignore](.solhintignore)

Reference: https://github.com/protofire/solhint

# Audit Tools

These tools will help find vulnerabilities and bad practices in the code

## Slither

Slither is a static analysis tool that helps you find vulnerabilities in Solidity code. It will check for common vulnerabilities like missing `require` statements, missing `@notice` and `@payable` annotations, and so on.

```
$ pip3 install slither-analyzer
```

# Open Zeppelin

This set of contracts provides the most common functionality for the development of smart contracts. They are battle tested and will increase the security of yout contracts.

```
$ yarn add -D @openzeppelin/contracts
```

# System Tools

## dotenv

_dotenv_ allows the loading of environment variables into our scripts. This is a standard way of defining variables specific to the environment without checking them into the repository

```
$ yarn add -D dotenv
```

Reference: https://www.npmjs.com/package/dotenv

## yargs

_yargs_ is a library for input parameter parsing. It is ideal for scripts that act as command line tools

```
$ yarn add -D yargs @types/yargs
```

Reference: https://www.npmjs.com/package/yargs

## cross-env

Allows to set environment variables on different systems without worrying about the syntax

```
$ yarn add -D cross-env
```

Reference: https://www.npmjs.com/package/cross-env

## fs-extra

For project files management

```
$ yarn add -D fs-extra @types/fs-extra
```

## cli-progress

Create more verbose command line scripts that provide an indication of current progress

```
$ yarn add -D cli-progress
```

## console-log-colors

Create better command line scripts by adding colors and making them more beautiful and useful

```
$ yarn add -D console-log-colors
```
