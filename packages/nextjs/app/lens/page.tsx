import type { NextPage } from "next";
import CreateProfile from "~~/app/lens/_components/CreateProfile";
import LensModules from "~~/app/lens/_components/LensModules";
import ProfileSelector from "~~/app/lens/_components/ProfileSelector";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Lens Modules",
  description: "Debug your deployed Lens Module contracts in an easy way",
});

const Lens: NextPage = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 lg:gap-y-8 pb-8 justify-center items-center">
      <div className="w-full text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Lens</h1>
        <p className="text-neutral">You can debug your deployed Lens Modules here.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl">
        <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="col-span-1 flex flex-col">
            <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl p-6 mb-6 space-y-1">
              <div className="flex flex-col gap-1">
                <span className="font-bold">Lens Profiles</span>
                <ProfileSelector />
                <CreateProfile />
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
            <div className="z-10">
              <LensModules />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lens;
