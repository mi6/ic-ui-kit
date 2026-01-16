//common imports to be used across all a11y tests
declare global {
  interface NodeList {
    includes(node: Node): boolean;
  }
}

import { defineCustomElements } from "../loader/index";
import { toHaveNoViolations } from "jest-axe";
import { expect } from "@jest/globals";

if (!NodeList.prototype.includes) {
  NodeList.prototype.includes = Array.prototype.includes;
}
defineCustomElements();
expect.extend(toHaveNoViolations);
