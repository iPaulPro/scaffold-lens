import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";

describe("TipActionModule", function () {
  const PROFILE_ID = 1;
  const PUBLICATION_ID = 1;
  const TIP_AMOUNT = "1";

  let TipActionModule: ContractFactory;
  let tipOpenAction: Contract;
  let moduleRegistry: Contract;
  let ownerAddress: string;
  let recipientAddress: string;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    TipActionModule = await ethers.getContractFactory("TipActionModule");
    const [owner, recipient] = await ethers.getSigners();

    ownerAddress = await owner.getAddress();
    recipientAddress = await recipient.getAddress();

    // Deploy a new mock ModuleRegistry contract
    const ModuleRegistry = await ethers.getContractFactory("MockModuleRegistry");
    moduleRegistry = await ModuleRegistry.deploy();
    await moduleRegistry.deployed();

    // Deploy a new TipActionModule contract for each test
    tipOpenAction = await TipActionModule.deploy(ownerAddress, moduleRegistry.address);
    await tipOpenAction.deployed();
  });

  // Test case for supportsInterface function
  it("Should support the Lens Module interface", async function () {
    // Calculate the interface ID for 'LENS_MODULE'
    const interfaceID = ethers.utils.solidityKeccak256(["string"], ["LENS_MODULE"]);
    const bytes4InterfaceID = ethers.utils.hexDataSlice(interfaceID, 0, 4);

    // Call supportsInterface and check the result
    expect(await tipOpenAction.supportsInterface(bytes4InterfaceID)).to.be.true;
  });

  // Test case for initializePublicationAction function
  it("Should initialize publication action", async function () {
    // Call the initializePublicationAction function
    const tx = await tipOpenAction.initializePublicationAction(
      PROFILE_ID,
      PUBLICATION_ID,
      ownerAddress,
      ethers.utils.defaultAbiCoder.encode(["address"], [recipientAddress]),
    );

    await expect(tx)
      .to.emit(tipOpenAction, "TipReceiverRegistered")
      .withArgs(PROFILE_ID, PUBLICATION_ID, recipientAddress);

    // Get the tip receiver
    const tipReceiver = await tipOpenAction.getTipReceiver(1, 1);

    // Test if the tip receiver is correctly set
    expect(tipReceiver).to.equal(recipientAddress);
  });

  // Test case for processPublicationAction function
  it("Should process publication action", async function () {
    // Initialize the publication action
    await tipOpenAction.initializePublicationAction(
      PROFILE_ID,
      PUBLICATION_ID,
      ownerAddress,
      ethers.utils.defaultAbiCoder.encode(["address"], [recipientAddress]),
    );

    // Deploy a new mock ERC20 token contract
    const TestToken = await ethers.getContractFactory("TestToken");
    const token = await TestToken.deploy();
    await token.deployed();

    const tipAmount = ethers.utils.parseEther(TIP_AMOUNT);

    // Approve the TipActionModule contract to spend tokens
    await token.approve(tipOpenAction.address, tipAmount);

    // Register the token in the mock ModuleRegistry contract
    await moduleRegistry.registerErc20Currency(token.address);

    // Prepare the parameters for processPublicationAction
    const params = {
      publicationActedProfileId: PROFILE_ID,
      publicationActedId: PUBLICATION_ID,
      actorProfileId: PROFILE_ID,
      actorProfileOwner: ownerAddress,
      transactionExecutor: ownerAddress,
      referrerProfileIds: [],
      referrerPubIds: [],
      referrerPubTypes: [],
      actionModuleData: ethers.utils.defaultAbiCoder.encode(["address", "uint256"], [token.address, tipAmount]),
    };

    // Call the processPublicationAction function
    const tx = await tipOpenAction.processPublicationAction(params);

    await expect(tx)
      .to.emit(tipOpenAction, "TipCreated")
      .withArgs(ownerAddress, recipientAddress, token.address, tipAmount);

    // Get the balance of the tip receiver
    const balance = await token.balanceOf(recipientAddress);

    // Test if the tip was correctly transferred
    expect(balance).to.equal(tipAmount);
  });
});
