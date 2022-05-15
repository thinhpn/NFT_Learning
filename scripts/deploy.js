
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const Thinh = await hre.ethers.getContractFactory("ThinhPN");
  const thinhNFT = await Thinh.deploy("THINHPN ","TPN");

  await thinhNFT.deployed();

  console.log("ThinhPN deployed to:", thinhNFT.address);

  await thinhNFT.mint("https://ipfs.io/ipfs/QmctWpSGdqJqNRwhPpnGRLVBtAsgaGwtSKdabjXdEVkKFE");
  console.log("NFT successfully minted");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
