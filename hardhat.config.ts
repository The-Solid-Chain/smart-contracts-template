import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-abi-exporter";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import "solidity-coverage";

import "./tasks/accounts";
import "./tasks/clean";

import { resolve } from "path";

import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

import { getChainConfig, getHardhatChainConfig, getLocalhostChainConfig } from "./hardhat.helpers";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    gasReporter: {
        currency: "USD",
        enabled: process.env.REPORT_GAS ? true : false,
        excludeContracts: [],
        src: "./contracts",
    },
    networks: {
        localhost: getLocalhostChainConfig(),
        hardhat: getHardhatChainConfig(),
        goerli: getChainConfig("goerli"),
        kovan: getChainConfig("kovan"),
        rinkeby: getChainConfig("rinkeby"),
        ropsten: getChainConfig("ropsten"),
        "arb-rinkeby": getChainConfig("arb-rinkeby"),
    },
    paths: {
        artifacts: "./artifacts",
        cache: "./cache",
        sources: "./contracts",
        tests: "./test",
    },
    solidity: {
        version: "0.8.9",
        settings: {
            metadata: {
                // Not including the metadata hash
                // https://github.com/paulrberg/solidity-template/issues/31
                bytecodeHash: "none",
            },
            // Disable the optimizer when debugging
            // https://hardhat.org/hardhat-network/#solidity-optimizer-support
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v5",
        externalArtifacts: [
            //"@uniswap/v3-periphery/artifacts/contracts/interfaces/INonfungiblePositionManager.sol/INonfungiblePositionManager.json",
        ],
    },
    abiExporter: {
        path: "./abis",
        runOnCompile: true,
        clear: true,
        flat: true,
        only: [],
        spacing: 2,
        pretty: false,
    },
};

export default config;
