//common imports to be used across all a11y tests

import { defineCustomElements } from "../loader/index";
import { toHaveNoViolations } from "jest-axe";
defineCustomElements();
expect.extend(toHaveNoViolations);
