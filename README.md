# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## About

This project uses the newest template for writing upgradeable contract.
Deploy this contract on sepolia network.
It has two contracts Box and BoxV2.
BoxV2 is the upgraded version.
First deploy this contract then verify.

## Command for deployment

```shell
$ npx hardhat compile
$ npx hardhat run --network sepolia ./scripts/deploy.js
$ npx hardhat run --network sepolia ./scripts/deployUpgrade.js

```

## Commands for Verification

```shell
$ npx hardhat verify --network sepolia <ADDRESS OF IMPLEMENTATION CONTRACT >
```

## Command for hardhat console

```shell
$ npx hardhat console --network sepolia
```

## code for getting values in the console

const Box = await ethers.getContractFactory("Box")

const box = await Box.attach("ADDRESS OF PROXY CONTRACT")

(await box.retrieve()).toString()
