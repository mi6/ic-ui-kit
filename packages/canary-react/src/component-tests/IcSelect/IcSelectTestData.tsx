import React from "react";
import { IcSelectWithMulti } from "../../components";
import {
  GROUPED_OPTIONS,
  OPTIONS,
  OPTIONS_WITH_DESCRIPTIONS,
  OPTIONS_WITH_DISABLED,
} from "../../../../canary-web-components/src/components/ic-select-with-multi/story-data";

export const MultiSelectDefault = () => {
  return (
    <IcSelectWithMulti
      label="What are your favourite types of coffee?"
      options={OPTIONS}
      multiple
    />
  );
};

export const MultiSelectDefaultValue = () => {
  return (
    <IcSelectWithMulti
      label="What are your favourite types of coffee?"
      options={OPTIONS}
      value={["Ame", "Fil", "Moc"]}
      multiple
    />
  );
};

export const MultiSelectWithDescriptions = () => {
  return (
    <IcSelectWithMulti
      label="What are your favourite types of coffee?"
      options={OPTIONS_WITH_DESCRIPTIONS}
      multiple
    />
  );
};

export const MultiSelectSmall = () => {
  return (
    <IcSelectWithMulti
      label="What are your favourite types of coffee?"
      options={OPTIONS}
      size="small"
      multiple
    />
  );
};

export const MultiSelectLarge = () => {
  return (
    <IcSelectWithMulti
      label="What are your favourite types of coffee?"
      options={OPTIONS}
      size="large"
      multiple
    />
  );
};

export const MultiSelectDisabledOptions = () => {
  return (
    <IcSelectWithMulti
      label="What are your favourite types of coffee?"
      options={OPTIONS_WITH_DISABLED}
      multiple
    />
  );
};

export const MultiSelectReadOnly = () => {
  return (
    <IcSelectWithMulti
      label="What are your favourite types of coffee?"
      options={OPTIONS}
      value={["Cap", "Fla", "Moc"]}
      readonly
      multiple
    />
  );
};

export const MultiSelectGroups = () => {
  return (
    <IcSelectWithMulti
      label="What are your favourite types of coffee?"
      options={GROUPED_OPTIONS}
      multiple
    />
  );
};

export const MultiSelectWithAllValues = () => {
  return (
    <IcSelectWithMulti
      label="What are your favourite types of coffee?"
      options={OPTIONS}
      value={["Cap", "Lat", "Ame", "Fil", "Fla", "Moc", "Mac"]}
      multiple
    />
  );
};
