"use client";

import React from "react";
import { ActOnPost } from "~~/app/lens/_components/ActOnPost";
import { Publication } from "~~/hooks/scaffold-lens";

interface PublicationProps {
  publication: Publication;
}

export const Post: React.FC<PublicationProps> = ({ publication }) => {
  return (
    <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col space-y-2 p-4">
      <div className="text-sm">pubId: {publication.pubId.toString()}</div>
      <div>{publication.contentURI}</div>
      {publication.openActions.length > 0 && <ActOnPost publication={publication} />}
    </div>
  );
};
