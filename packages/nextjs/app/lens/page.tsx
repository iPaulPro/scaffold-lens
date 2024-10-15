import { fetchMetadata } from "frames.js/next";
import type { NextPage } from "next";
import { LensModules } from "~~/app/lens/_components";

export async function generateMetadata() {
  return {
    title: "Open Actions",
    description: "Debug your deployed Lens Module contracts in an easy way",
    other: {
      ...(await fetchMetadata(
        new URL(
          "/frames/serve",
          process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000",
        ),
      )),
    },
  };
}

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
