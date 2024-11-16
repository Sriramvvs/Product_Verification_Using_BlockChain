const { ethers } = require("hardhat"); // Import from Hardhat

async function main() {
    // Get the contract factory
    const ContractFactory = await ethers.getContractFactory("Central");
    // Deploy the contract
    const contract = await ContractFactory.deploy(); 
    // Log the deployed contract address
    console.log("Contract deployed to address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
