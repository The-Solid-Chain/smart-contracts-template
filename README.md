# Smart Contracts Template Repo

This repository is a Yarn zero-install repository for Smart Contracts development. It uses the following tools/libraries:

- **Yarn**
- **Hardhat**
- **solc**
- **Typechain/Typescript**
- **OpenZeppelin**
- **Ethers.js**

## Setup

To start using this repo, first you need to have Node and Yarn installed. If you don't have them and don't know how to install them, you can refer to the [PREREQUISITES.md](./PREREQUISITES.md) installation instructions.

Then you can install all dependencies using the following command:
```
$ yarn install
```

## Commands

All the tools are configured with some plugins to get the most out of them. Some pre-configured commands are also provided in **package.json**.

### Local Blockchain
- `hardhat:localnode` runs a Hardhat local chain for testing
- `hardhat:accounts` shows all the accounts in the local chain
- `ganache:rinkeby` runs a Ganache local chain forking from Rinkeby
- `ganache:mainnet` runs a Ganache local chain forking from mainnet
### Contracts
- `contracts:clean` cleans the compilation
- `contracts:typechain` generates all typescript bindings for the contracts
- `contracts:compile` compiles the contracts usin `solc`
- `contracts:analyze` uses Slither to do static analysis of the contracts
- `contracts:test` runs the tests for the Solidity contracts
- `contracts:coverage` generates a code coverage report from the Solidity tests
- `contracts:size` provides information about the contracts size

### Deployments
- `deploy:local` tries to deploy the contracts on the local chain
- `deploy:rinkeby` tries to deploy the contracts on the Rinkeby network
- `deploy:mainnet` tries to deploy the contracts on the mainnet network

## Formatting
- `lint` runs the linter for Solidity contracts. This includes the Solidity and TS linters, and the prettier code formatter plugin
- `lint:sol` runs the Solidity linter
- `lint:ts` runs the TS linter
- `prettier` runs the prettier linter and formats all supported files according to the configuration
- `prettier:check` runs the prettier linter and informs if there are any formatting errors

## Repository

For more information on how to create your own repo like this one, you can read the [YARN.md](./YARN.md) and [PACKAGES.md](./PACKAGES.md) guides.
# Author
My name is Roberto Cano, I'm a Blockchain Engineer and Founder of **The Solid Chain**. You can find me on:

- [The Solid Chain](https://thesolidchain.com)
- [Twitter](https://twitter.com/robersoca)
- [Github](https://github.com/robercano)
- [LinkedIn](https://www.linkedin.com/in/robercano/)

# The Solid Chain

- [Twitter](https://twitter.com/TheSolidChain) 
- [Github](https://github.com/robercano)
- [LinkedIn](https://www.linkedin.com/company/thesolidchain/)
- [Medium](https://medium.com/@thesolidchain)

🄯 Copyleft Roberto Cano/The Solid Chain 2022
