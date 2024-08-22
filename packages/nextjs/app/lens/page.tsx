import type { NextPage } from "next";
import { Profile } from "~~/app/lens/_components/Profile";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Lens Modules",
  description: "Debug your deployed Lens Module contracts in an easy way",
});

const Lens: NextPage = () => {
  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Lens</h1>
        <p className="text-neutral">You can view your deployed Lens Modules here.</p>
      </div>
      <Profile />
    </>
  );
};

export default Lens;
