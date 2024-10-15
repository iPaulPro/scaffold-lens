/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

const handleRequest = frames(async ctx => {
  let iAm: string | undefined;

  if (ctx.message) {
    iAm = (await ctx.message.walletAddress()) ?? "anonymous";
  }

  return {
    image: <span>{iAm ? `I am ${iAm}` : `Click the button`}</span>,
    buttons: [<Button action="post">Who am I?</Button>],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
