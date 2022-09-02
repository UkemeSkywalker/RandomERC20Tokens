require("dotenv").config()
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

module.exports = {
  solidity: "0.8.9",
  networks: {
      goerli: {
        url: process.env.GOERLI_RPC,
        accounts:[process.env.SKYWALKER]
      },
},
etherscan: {
  apiKey: process.env.ETHERSCANKEY
}
}



