import React from "react";
import { IcBackToTop } from "../../components";

export const BackToTop = () => {
  return (
    <div style={{ height: "120vh" }}>
      <div id="topEl" style={{ position: "absolute", top: "0", width: "100%" }}>
        Top of screen
      </div>
      <IcBackToTop target="topEl" />
    </div>
  );
};
