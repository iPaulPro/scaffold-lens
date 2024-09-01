import type { NextPage } from "next";
import { LensModules } from "~~/app/lens/_components";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Open Actions",
  description: "Debug your deployed Lens Module contracts in an easy way",
});

const Lens: NextPage = () => {
  return (
    <>
      <LensModules />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Lens</h1>
        <p className="text-neutral">You can debug your deployed Lens Modules here.</p>
      </div>
    </>
  );
};

export default Lens;
