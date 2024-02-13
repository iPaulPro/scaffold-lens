import { ethers } from "hardhat";
import { expect } from "chai";

describe("EasPollActionModule", function () {
  it("Should initialize publication action correctly", async function () {
    const [wallet] = await ethers.getSigners();

    const mockSchemaRegistry = await ethers.getContractFactory("MockSchemaRegistry");
    const schemaRegistry = await mockSchemaRegistry.deploy();

    // const EAS = await ethers.getContractFactory("IEAS");
    const mockEas = await ethers.getContractFactory("MockEAS");
    const eas = await mockEas.deploy(schemaRegistry.getAddress());
    // Deploy the contract
    const EasPollActionModule = await ethers.getContractFactory("EasPollActionModule");
    const easPollActionModule = await EasPollActionModule.deploy(
      wallet.address,
      "0x0000000000000000000000000000000000000000",
      await eas.getAddress(),
    );

    // Prepare the data for the Poll struct
    const poll = {
      options: ["Option A", "Option B", "Option C", "Option D"],
      followersOnly: false,
      endTimestamp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24 hours from now
      signatureRequired: true,
    };

    // Call the initializePublicationAction function
    const profileId = 1;
    const pubId = 1;
    const data = ethers.AbiCoder.defaultAbiCoder().encode(
      ["bytes32[4]", "bool", "uint40", "bool"],
      [poll.options.map(ethers.encodeBytes32String), poll.followersOnly, poll.endTimestamp, poll.signatureRequired],
    );
    console.log("data", data);
    await easPollActionModule.initializePublicationAction(profileId, pubId, wallet.address, data);

    // Retrieve the poll from the contract
    const pollFromContract = await easPollActionModule.getPoll(profileId, pubId);

    // Assert that the poll has been stored correctly
    expect(pollFromContract.options).to.deep.equal(poll.options.map(ethers.encodeBytes32String));
    expect(pollFromContract.followersOnly).to.equal(poll.followersOnly);
    expect(pollFromContract.endTimestamp).to.equal(poll.endTimestamp);
    expect(pollFromContract.signatureRequired).to.equal(poll.signatureRequired);
  });
});
