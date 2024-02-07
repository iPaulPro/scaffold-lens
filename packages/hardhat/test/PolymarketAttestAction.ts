import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber, Contract } from "ethers";

describe("PolymarketAttestActionModule", function () {
  const PROFILE_ID = 1;
  const PUBLICATION_ID = 1;
  // const ORACLE = "0x6A9D222616C90FcA5754cd1333cFD9b7fb6a4F74";
  const QUESTION_ID = "0x923633cf67d29842dc8899c1f2dc37fb3fa6113dc452802c5884610f0d91b290";
  const CONDITION_ID = "0x01958cbde4700b3699a09fea26d24c126efa504f8101105f0610a27c005922d9";
  const COLLATERAL_TOKENS = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
  const TOKEN_ID_YES = BigNumber.from("85716153924393288515060454711995009917659065728244817497788767821416723541786");
  const TOKEN_ID_NO = BigNumber.from("23530435500672333697683950862779846733955212409943047255019707993829021665015");

  let polymarketAttestAction: Contract;
  let mockCtfExchange: Contract;
  let mockUmaCtfAdapter: Contract;
  let mockConditionalTokens: Contract;
  let mockModuleRegistry: Contract;
  let mockCollateralToken: Contract;
  let ownerAddress: string;

  beforeEach(async function () {
    const [owner] = await ethers.getSigners();
    ownerAddress = await owner.getAddress();

    const MockCtfExchange = await ethers.getContractFactory("MockCtfExchange");
    mockCtfExchange = await MockCtfExchange.deploy();
    await mockCtfExchange.deployed();

    const MockUmaCtfAdapter = await ethers.getContractFactory("MockUmaCtfAdapter");
    mockUmaCtfAdapter = await MockUmaCtfAdapter.deploy("0x91430CaD2d3975766499717fA0D66A78D814E5c5");
    await mockUmaCtfAdapter.deployed();

    // Initialize the question
    await mockUmaCtfAdapter.initialize(
      "0x713a207469746c653a2057696c6c204d75736b206669676874205a75636b20696e20323032333f2c206465736372697074696f6e3a2054686973206d61726b65742077696c6c207265736f6c766520746f20225965732220696620456c6f6e204d75736b20616e64204d61726b205a75636b65726265726720656e6761676520696e20616e79206669676874206265666f726520446563656d6265722033312c20323032332c2031313a353920504d2045542e204f74686572776973652c2074686973206d61726b65742077696c6c207265736f6c766520746f20224e6f222e0a0a546865207072696d617279207265736f6c7574696f6e20736f7572636520666f722074686973206d61726b65742077696c6c20626520666f6f74616765206f662074686520666967687420697473656c662c20686f7765766572206120636f6e73656e737573206f66206372656469626c65207265706f7274696e672077696c6c20616c736f20626520757365642e207265735f646174613a2070313a20302c2070323a20312c2070333a20302e352e20576865726520703120636f72726573706f6e647320746f204e6f2c20703220746f205965732c20703320746f20756e6b6e6f776e2f35302d3530",
      COLLATERAL_TOKENS,
      5000000,
      1500000000,
    );

    const MockConditionalTokens = await ethers.getContractFactory("MockConditionalTokens");
    mockConditionalTokens = await MockConditionalTokens.deploy();
    await mockConditionalTokens.deployed();

    // Deploy a new mock ModuleRegistry contract
    const ModuleRegistry = await ethers.getContractFactory("MockModuleRegistry");
    mockModuleRegistry = await ModuleRegistry.deploy();
    await mockModuleRegistry.deployed();

    const TestToken = await ethers.getContractFactory("TestToken");
    mockCollateralToken = await TestToken.deploy();
    await mockCollateralToken.deployed();

    const PolymarketAttestActionModule = await ethers.getContractFactory("PolymarketAttestActionModule");
    polymarketAttestAction = await PolymarketAttestActionModule.deploy(
      ownerAddress, // lensHub
      mockModuleRegistry.address, // lensModuleRegistry
      mockCtfExchange.address, // ctfExchange
      mockCollateralToken.address, // collateralToken
      mockConditionalTokens.address, // conditionalTokens
      mockUmaCtfAdapter.address, // umaCtfAdapter
    );
    await polymarketAttestAction.deployed();
  });

  it("should initialize publication action correctly", async function () {
    const data = ethers.utils.defaultAbiCoder.encode(["bytes32"], [QUESTION_ID]);

    await expect(polymarketAttestAction.initializePublicationAction(PROFILE_ID, PUBLICATION_ID, ownerAddress, data))
      .to.emit(polymarketAttestAction, "MarketRegistered")
      .withArgs(PROFILE_ID, PUBLICATION_ID, mockUmaCtfAdapter.address, QUESTION_ID, CONDITION_ID, [
        TOKEN_ID_YES,
        TOKEN_ID_NO,
      ]);
  });

  it("should revert when trying to initialize publication action with invalid questionId", async function () {
    const data = ethers.utils.defaultAbiCoder.encode(["bytes32"], [ethers.constants.HashZero]);

    await expect(
      polymarketAttestAction.initializePublicationAction(PROFILE_ID, PUBLICATION_ID, ownerAddress, data),
    ).to.be.revertedWithCustomError(polymarketAttestAction, "QuestionIdMustBeProvided");
  });
});
