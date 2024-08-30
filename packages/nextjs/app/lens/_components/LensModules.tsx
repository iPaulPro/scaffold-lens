"use client";

import React, { useState } from "react";
import { CreatePost, CreateProfile, ERC20Token, Post, ProfileSelector } from "~~/app/lens/_components";
import { useCollectModules, useERC20Tokens, useProfile, usePublications } from "~~/hooks/scaffold-lens";

export const LensModules: React.FC = () => {
  const [postRefreshCounter, setPostRefreshCounter] = useState(0);

  const { profileId } = useProfile();
  const { collectModules } = useCollectModules();
  const { erc20Tokens } = useERC20Tokens();
  const { publications } = usePublications(postRefreshCounter);

  const onPostCreated = () => {
    setPostRefreshCounter(count => count + 1);
  };

  return (
    <>
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl">
          <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="col-span-1 flex flex-col">
              <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl p-6 mb-6 space-y-1">
                <div className="flex flex-col">
                  <span className="font-bold">Lens Profiles</span>
                  <ProfileSelector />
                  <CreateProfile />
                </div>
              </div>
              {erc20Tokens?.map(token => <ERC20Token token={token} key={token.contract.address} />)}
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
              <div className="z-10">
                {profileId ? (
                  <div className="flex flex-col">
                    <CreatePost onPostCreated={onPostCreated} />
                    <div className="flex flex-col gap-y-2 pt-4 flex-col-reverse">
                      {publications?.map(publication => (
                        <Post
                          publication={publication}
                          collectModules={collectModules}
                          key={publication.pubId.toString()}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col gap-y-2 p-4">
                    <div>Create a profile to get started</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
