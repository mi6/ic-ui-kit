import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";

import "../../dist/core/normalize.css";
import "@ukic/fonts/dist/fonts.css";
import "../../dist/core/core.css";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
