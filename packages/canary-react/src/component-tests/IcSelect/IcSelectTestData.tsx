import React from "react";
import { IcSelectWithMulti } from "../../components";
import { OPTIONS } from "../../../../canary-web-components/src/components/ic-select-with-multi/story-data";

export const MultiSelectDefault = () => {
  return (
    <IcSelectWithMulti
      label="What are your favourite types of coffee?"
      options={OPTIONS}
      multiple
    />
  );
};
