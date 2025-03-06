import React from "react";
import { IcBackToTop } from "../../components";
import {
  IcBackToTopPositions,
  IcBackToTopVariants,
  IcThemeMode,
} from "@ukic/web-components";

export const BackToTop = (props: {
  variant?: IcBackToTopVariants;
  theme: IcThemeMode;
  position?: IcBackToTopPositions;
}) => {
  const { variant, theme, position } = props;

  return (
    <div style={{ height: "120vh" }}>
      <div id="topEl" style={{ position: "absolute", top: "0", width: "100%" }}>
        Top of screen
      </div>
      <IcBackToTop
        target="topEl"
        variant={variant}
        theme={theme}
        position={position == undefined ? "right" : position}
      />
    </div>
  );
};
