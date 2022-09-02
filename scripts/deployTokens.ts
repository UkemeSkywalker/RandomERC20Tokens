import {ethers} from "hardhat";

async function main() {

    // const deployABWToken = await ethers.getContractFactory("AngryBlackWomen");
    // const AngryBlackWomen = await deployABWToken.deploy();

    // const deploydevRelCoin = await ethers.getContractFactory("devRelCoin");
    // const devRelCoin = await deploydevRelCoin.deploy();

    // const deployGrandPrix = await ethers.getContractFactory("GrandPrix");
    // const GrandPrix = await deployGrandPrix.deploy();

    // const deployherrenConsultToken = await ethers.getContractFactory("herrenConsultToken");
    // const herrenConsultToken = await deployherrenConsultToken.deploy();

    const deploymarsNetworkCoin = await ethers.getContractFactory("marsNetworkCoin");
    const marsNetworkCoin = await deploymarsNetworkCoin.deploy();

    console.log(
        // "Angry Black Women:", AngryBlackWomen.address, "\n",
        // "DevRel Coin:", devRelCoin.address, "\n",
        // "Grand Prix:", GrandPrix.address, "\n",
        // "Herren Consult Token:", herrenConsultToken.address, "\n",
        "Mars Network Coin:", marsNetworkCoin.address
        )

    

}

main()
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
})