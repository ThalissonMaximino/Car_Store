import React from "react";
import { NoCarsSection } from "./style";
import MessageComponet from "./messages/index";

const NoCars = () => {
  return (
    <NoCarsSection>
      <MessageComponet />
      <h1 className="text-style-heading-heading-1-700">404 NOT FOUND</h1>
    </NoCarsSection>
  );
};

export default NoCars;
