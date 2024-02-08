import { ethers } from "hardhat";
import { expect } from "chai";
import { deployMockContract } from "@ethereum-waffle/mock-contract";
import IEAS from "../artifacts/@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol/IEAS.json";

describe("EasPollActionModule", function () {
  it("Should initialize publication action correctly", async function () {
    const [wallet] = await ethers.getSigners();

    // const EAS = await ethers.getContractFactory("IEAS");
    const mockEas = await deployMockContract(wallet, IEAS.abi);
    // Deploy the contract
    const EasPollActionModule = await ethers.getContractFactory("EasPollActionModule");
    const easPollActionModule = await EasPollActionModule.deploy(
      wallet.address,
      "0x0000000000000000000000000000000000000000",
      mockEas.address,
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    );

    // Prepare the data for the Poll struct
    const poll = {
      options: ["Option A", "Option B", "Option C", "Option D"],
      followerOnly: false,
      endTimestamp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24 hours from now
    };

    // Call the initializePublicationAction function
    const profileId = 1;
    const pubId = 1;
    const data = ethers.utils.defaultAbiCoder.encode(
      ["bytes32[4]", "bool", "uint40"],
      [poll.options.map(ethers.utils.formatBytes32String), poll.followerOnly, poll.endTimestamp],
    );
    console.log("data", data);
    await easPollActionModule.initializePublicationAction(profileId, pubId, wallet.address, data);

    // Retrieve the poll from the contract
    const pollFromContract = await easPollActionModule.getPoll(profileId, pubId);

    // Assert that the poll has been stored correctly
    expect(pollFromContract.options).to.deep.equal(poll.options.map(ethers.utils.formatBytes32String));
    expect(pollFromContract.followerOnly).to.equal(poll.followerOnly);
    expect(pollFromContract.endTimestamp).to.equal(poll.endTimestamp);
  });
});
