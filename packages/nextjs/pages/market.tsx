"use client";

import { ExternalProvider } from "@ethersproject/providers";
import { ClobClient, getContractConfig } from "@polymarket/clob-client";
import { constants, providers } from "ethers";
import { NextPage } from "next";
import { createWalletClient, custom } from "viem";
import { polygon, polygonMumbai } from "viem/chains";
import { conditionalTokenAbi } from "~~/lib/abis/conditionalTokenAbi";
import { usdcAbi } from "~~/lib/abis/usdcAbi";

const chain = polygonMumbai;
const clobApiUrl =
  chain.id.valueOf() === polygon.id ? "https://clob.polymarket.com/" : "https://clob-staging.polymarket.com/";
const config = getContractConfig(chain.id);

async function getWalletClient() {
  if (!window.ethereum) {
    throw new Error("getWalletClient: no ethereum provider");
  }
  const [account] = await window.ethereum.request({ method: "eth_requestAccounts" });
  console.log("getWalletClient: using account", account);
  const localWalletClient = createWalletClient({
    account,
    chain,
    transport: custom(window.ethereum),
  });
  return { account, localWalletClient };
}

const createOrder = async () => {
  const provider = new providers.Web3Provider(window.ethereum as ExternalProvider);
  const signer = provider.getSigner();
  // const address = await signer.getAddress();

  const clobClient = new ClobClient(clobApiUrl, chain.id, signer);

  const creds = await clobClient.deriveApiKey(0);
  console.log("createOrder: apiKeyCreds", creds);

  // const proxyWalletAddress = getProxyWalletAddress(safe_address, account);

  const l2ClobClient = new ClobClient(
    clobApiUrl,
    chain.id,
    signer,
    creds,
    // SignatureType.POLY_GNOSIS_SAFE,
    // proxyWalletAddress,
  );

  const myOpenOrders = await l2ClobClient.getOpenOrders();
  console.log("createOrder: myOpenOrders", myOpenOrders);

  // const markets = [];
  // const marketsPayload = await l2ClobClient.getMarkets();
  // let nextCursor: string | undefined = marketsPayload.next_cursor;
  // while (nextCursor) {
  //   try {
  //     const nextMarkets = await l2ClobClient.getMarkets(nextCursor);
  //     markets.push(...nextMarkets.data);
  //     nextCursor = nextMarkets.next_cursor;
  //   } catch (e) {
  //     nextCursor = undefined;
  //   }
  // }
  // console.log("createOrder: ", marketsPayload.count, "markets");
  //
  // const openMarkets = marketsPayload.data.filter(m => !m.closed);
  // console.log("createOrder: activeMarkets", openMarkets);
  //
  // const findMarket = async () => {
  //   for (const market of openMarkets) {
  //     const tokenID = market.tokens.find(token => token.outcome === "No")?.token_id;
  //     if (!tokenID) continue;
  //     const priceRes = await l2ClobClient.getPrice(tokenID, Side.BUY);
  //     console.log("createOrder: tokenID", tokenID, "price", priceRes);
  //     let price = priceRes.price;
  //     if (price !== "0") {
  //       return { market, price };
  //     }
  //   }
  //   return { market: undefined, price: undefined };
  // };
  //
  // const { market, price } = await findMarket();

  // const market: { tokens: any[] } = openMarkets[0];
  // const market = await l2ClobClient.getMarket("0x01958cbde4700b3699a09fea26d24c126efa504f8101105f0610a27c005922d9");
  // const tokenID = market.tokens.find(token => token.outcome === "No")?.token_id;
  const tokenID = "88338572045681885230929771298378256652324875272521785820255616475971956514259"; // YES
  // const tokenID = " 55532475252909998012650010434309245009128554025209054789347111104743465619530"; // NO

  // const priceRes = await l2ClobClient.getPrice(tokenID, Side.BUY);
  // const price = priceRes.price;

  // if (!market || !price) {
  //   console.error("createOrder: no market found");
  //   return;
  // }
  //
  // console.log("createOrder: market", market, "price", price);
  //
  // const orders = await l2ClobClient.getOpenOrders({
  //   market: market.condition_id,
  // });
  // console.log("createOrder: open orders", orders);

  // const trades = await l2ClobClient.getTrades({
  //   market: market.condition_id,
  //   taker: account,
  //   limit: 10,
  // });
  // console.log("createOrder: trades", trades);

  // const tokenID = market.tokens.find(token => token.outcome === "Yes").token_id;

  // const orderBook = await l2ClobClient.getOrderBook(tokenID);
  // console.log("createOrder: orderBook", orderBook);

  // const midRes = await l2ClobClient.getMidpoint(tokenID);
  // const price = Number.parseFloat(midRes.mid);
  // const priceRes = await l2ClobClient.getPrice(tokenID, Side.BUY);
  // const price = Number.parseFloat(priceRes.price);
  //
  // console.log("createOrder: price", priceRes, price);

  const order = await l2ClobClient.createMarketBuyOrder({
    tokenID,
    amount: 10,
    price: 0.5,
  });
  // const order = await l2ClobClient.createOrder({
  //   tokenID,
  //   size: 15,
  //   price: 0.5,
  //   side: Side.BUY,
  // });
  console.log("Created Order", order);

  // const orderBuilder = new ExchangeOrderBuilder(config.exchange, chain.id, signer);
  //
  // const order = await orderBuilder.buildSignedOrder({
  //   maker: address,
  //   taker: constants.AddressZero,
  //   tokenId: tokenID,
  //   side: Side.BUY,
  //   makerAmount: "15000000",
  //   takerAmount: "30000000",
  //   feeRateBps: "0",
  //   nonce: "1",
  // });

  // const orderTypedData = orderBuilder.buildOrderTypedData(order);
  //
  // const orderSignature = await orderBuilder.buildOrderSignature(orderTypedData);
  //
  // const signedOrder: SignedOrder = {
  //   ...order,
  //   signature: orderSignature,
  // };
  //
  // console.log("createOrder: order", order);

  try {
    const postRes = await l2ClobClient.postOrder(order);
    console.log("postRes", postRes);
  } catch (e) {
    console.error("postOrder: error", e);
  }
};

const mintableUsdcAbi = [
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const mintUsdc = async () => {
  const { account, localWalletClient } = await getWalletClient();

  try {
    localWalletClient.writeContract({
      address: config.collateral,
      abi: mintableUsdcAbi,
      functionName: "mint",
      args: [account, BigInt("1000000000000")],
    });
  } catch (e) {
    console.error("mintUsdc: error", e);
  }
};

const approveSpend = async () => {
  const { localWalletClient } = await getWalletClient();
  console.log("approveSpend: localWalletClient chain", localWalletClient.chain, "config", config);
  try {
    let hash;
    hash = await localWalletClient.writeContract({
      address: config.collateral,
      abi: usdcAbi,
      functionName: "approve",
      args: [config.conditionalTokens, constants.MaxUint256],
    });
    console.log(`approveSpend: Setting USDC allowance for CTF: ${hash}`);

    hash = await localWalletClient.writeContract({
      address: config.collateral,
      abi: usdcAbi,
      functionName: "approve",
      args: [config.exchange, constants.MaxUint256],
    });
    console.log(`approveSpend: Setting USDC allowance for Exchange: ${hash}`);

    hash = await localWalletClient.writeContract({
      address: config.conditionalTokens,
      abi: conditionalTokenAbi,
      functionName: "setApprovalForAll",
      args: [config.exchange, true],
    });
    console.log(`approveSpend: Setting Conditional Tokens allowance for Exchange: ${hash}`);
  } catch (e) {
    console.error("approveSpend: error", e);
  }
};

const Market: NextPage = () => {
  return (
    <>
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        <p className="text-3xl mt-14">Market</p>

        <button
          className={`btn btn-secondary btn-sm font-light hover:border-transparent bg-base-100 hover:bg-secondary`}
          onClick={mintUsdc}
        >
          Mint USDC
        </button>

        <button
          className={`btn btn-secondary btn-sm font-light hover:border-transparent bg-base-100 hover:bg-secondary`}
          onClick={approveSpend}
        >
          Approve Spend
        </button>

        <button
          className={`btn btn-secondary btn-sm font-light hover:border-transparent bg-base-100 hover:bg-secondary`}
          onClick={createOrder}
        >
          Create Order
        </button>
      </div>
    </>
  );
};

export default Market;
