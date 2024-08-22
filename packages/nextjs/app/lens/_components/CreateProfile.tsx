import { useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";

interface CreateProfileProps {
  onProfileCreated: () => void;
}

const CreateProfile: React.FC<CreateProfileProps> = ({ onProfileCreated }: CreateProfileProps) => {
  const [handle, setHandle] = useState<string>("");

  const { address } = useAccount();
  const { writeContractAsync } = useScaffoldWriteContract("ProfileCreationProxy");

  async function createProfile() {
    if (!address || !handle) return;
    await writeContractAsync({
      functionName: "proxyCreateProfileWithHandle",
      args: [{ to: address, followModule: ZERO_ADDRESS, followModuleInitData: "0x" }, handle],
    });
    onProfileCreated();
    setHandle("");
  }

  return (
    <div className="bg-secondary p-10">
      <h1 className="text-4xl my-0">Create Profile</h1>
      <p className="text-neutral">Create a profile to interact with Lens Modules.</p>
      <input
        type="text"
        value={handle}
        onChange={e => setHandle(e.target.value)}
        placeholder="Enter handle"
        className="border border-accent rounded p-2"
      />
      <button onClick={createProfile} className="bg-accent text-neutral p-2 rounded mt-2">
        Create Profile
      </button>
    </div>
  );
};

export default CreateProfile;
