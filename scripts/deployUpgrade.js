const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const box = await upgrades.upgradeProxy(
    "0x5144Fb5978dB6E4AFBe391675A982b20d07Ede2A",
    BoxV2
  );
  console.log("Box upgraded");
}

main();
