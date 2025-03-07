import type { NextPage } from "next";
import { Accounts } from "~~/app/accounts/_components/Accounts";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Lens Accounts",
  description: "Debug your Lens Account contracts in an easy way",
});

const LensAccounts: NextPage = () => {
  return (
    <>
      <Accounts />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Lens Accounts</h1>
        <p className="text-neutral">
          You can debug & interact with your Lens Account contracts here.
          <br /> Check{" "}
          <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1">
            packages / nextjs / app / accounts / page.tsx
          </code>{" "}
        </p>
      </div>
    </>
  );
};

export default LensAccounts;
