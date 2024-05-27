const hre = require("hardhat");

async function main() {
    const [us,lab] = await hre.ethers.getSigners();
    const healthme = await hre.ethers.getContractFactory("healthme");
    const contract = await healthme.deploy();
    
    
    await contract.deployed();
    console.log("adress of contract : ", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  