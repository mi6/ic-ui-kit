import React from "react";
import { IcBackToTop } from "../../components";
import { IcBackToTopVariants } from "@ukic/web-components";

export const BackToTop = (props: { variant?: IcBackToTopVariants; theme }) => {
  const { variant, theme } = props;
  return (
    <div style={{ height: "120vh" }}>
      <div id="topEl" style={{ position: "absolute", top: "0", width: "100%" }}>
        Top of screen
      </div>
      <IcBackToTop target="topEl" variant={variant} theme={theme} />
    </div>
  );
};
