import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "../../dist/core/normalize.css";
import "@ukic/fonts/dist/fonts.css";
import "../../dist/core/core.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
