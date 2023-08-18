const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [42], { initializer: "store" });
  await box.waitForDeployment();
  console.log("Box deployed to:", await box.getAddress());
}

main();

// 0x5144Fb5978dB6E4AFBe391675A982b20d07Ede2A
