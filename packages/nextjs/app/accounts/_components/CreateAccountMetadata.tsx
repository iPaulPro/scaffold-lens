import { useEffect, useState } from "react";
import { immutable } from "@lens-chain/storage-client";
import { Resource, StorageClient } from "@lens-chain/storage-client";
import { AccountMetadataSchema, account } from "@lens-protocol/metadata";
import { uuidv4 } from "@walletconnect/utils";
import CopyToClipboard from "react-copy-to-clipboard";
import { CheckCircleIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { InputBase } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";

export function CreateAccountMetadata() {
  const [form, setForm] = useState<Record<string, any>>({
    id: uuidv4(),
    name: "",
    bio: "",
    picture: "",
    coverPicture: "",
  });
  const [validated, setValidated] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [metadata, setMetadata] = useState<Resource | undefined>(undefined);
  const [metadataURICopied, setMetadataURICopied] = useState(false);

  const storageClient = StorageClient.create();

  const { targetNetwork } = useTargetNetwork();

  const formToAccount = () => {
    const copy = { ...form };
    Object.keys(copy).forEach(key => copy[key] === "" && delete copy[key]);
    return account(copy);
  };

  useEffect(() => {
    const account = formToAccount();
    const { success } = AccountMetadataSchema.safeParse(account);
    setValidated(success);
  }, [form]);

  const handleUpload = async () => {
    if (!validated || isPending) return;

    setIsPending(true);

    try {
      const account = formToAccount();
      const acl = immutable(targetNetwork.id);
      const metadata = await storageClient.uploadAsJson(account, { acl });
      setMetadata(metadata);
    } catch (e) {
      console.error(e);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="z-10">
      <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
        <div className="h-[5rem] w-[13rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
          <div className="flex items-center justify-center space-x-2">
            <p className="my-0 text-sm">Create Account Metadata</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex flex-col gap-3 py-3 first:pt-0 last:pb-1">
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex items-center ml-2">
                <span className="text-xs font-medium mr-2 leading-none">name</span>
                <span className="block text-xs font-extralight leading-none">string</span>
              </div>
              <InputBase
                name={"name"}
                value={form.name}
                placeholder={"string name"}
                onChange={newValue => setForm({ ...form, name: newValue })}
              />
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex items-center ml-2">
                <span className="text-xs font-medium mr-2 leading-none">bio</span>
                <span className="block text-xs font-extralight leading-none">string</span>
              </div>
              <InputBase
                name={"bio"}
                value={form.bio}
                placeholder={"string bio"}
                onChange={newValue => setForm({ ...form, bio: newValue })}
              />
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex items-center ml-2">
                <span className="text-xs font-medium mr-2 leading-none">picture</span>
                <span className="block text-xs font-extralight leading-none">string</span>
              </div>
              <InputBase
                name={"picture"}
                value={form.picture}
                placeholder={"string picture"}
                onChange={newValue => setForm({ ...form, picture: newValue })}
              />
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex items-center ml-2">
                <span className="text-xs font-medium mr-2 leading-none">coverPicture</span>
                <span className="block text-xs font-extralight leading-none">string</span>
              </div>
              <InputBase
                name={"coverPicture"}
                value={form.coverPicture}
                placeholder={"string coverPicture"}
                onChange={newValue => setForm({ ...form, coverPicture: newValue })}
              />
            </div>
            <div className="flex justify-between gap-2 items-center">
              <div className="flex-grow basis-0 min-w-0">
                {metadata && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium flex-none">Metadata URI:</span>
                    <a className="text-xs font-extralight w-full truncate" href={metadata.gatewayUrl} target="_blank">
                      {metadata.uri}
                    </a>
                    {metadataURICopied ? (
                      <CheckCircleIcon
                        className="mr-1.5 text-xl font-normal text-sky-600 h-5 w-5 cursor-pointer"
                        aria-hidden="true"
                      />
                    ) : (
                      <CopyToClipboard
                        text={metadata.uri}
                        onCopy={() => {
                          setMetadataURICopied(true);
                          setTimeout(() => {
                            setMetadataURICopied(false);
                          }, 800);
                        }}
                      >
                        <DocumentDuplicateIcon
                          className="mr-1.5 text-xl font-normal text-sky-600 h-5 w-5 cursor-pointer"
                          aria-hidden="true"
                        />
                      </CopyToClipboard>
                    )}
                  </div>
                )}
              </div>
              <div
                className={`flex ${
                  !validated &&
                  "tooltip before:content-[attr(data-tip)] before:right-[-10px] before:left-auto before:transform-none"
                }`}
                data-tip={`${!validated && "Invalid metadata"}`}
              >
                <button className="btn btn-secondary btn-sm" disabled={!validated || isPending} onClick={handleUpload}>
                  {isPending && <span className="loading loading-spinner loading-xs"></span>}
                  Upload ⬆️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
