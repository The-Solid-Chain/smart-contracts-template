import { ethers } from "hardhat";

/**
 * Deploy SimpleContract
 */
async function main() {
    const SimpleContractFactory = await ethers.getContractFactory("SimpleContract");
    const SimpleContract = await SimpleContractFactory.deploy();

    await SimpleContract.deployed();

    console.log(`SimpleContract deployed at ${SimpleContract.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
