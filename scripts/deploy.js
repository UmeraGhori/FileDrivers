const hre = require("hardhat");

async function main() {

  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log(
    `deployed contract Address: ${upload.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 

//deployed contract address: 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853