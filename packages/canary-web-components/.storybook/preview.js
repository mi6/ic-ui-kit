import "@ukic/web-components/dist/core/normalize.css";
import "@ukic/fonts/dist/fonts.css";
import "@ukic/web-components/dist/core/core.css";
import "../src/global/icds.css";

import { defineCustomElements } from '../dist/esm/loader';

defineCustomElements();

export const parameters = {
  controls: {
      matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    hideNoControlsWarning: true
  },
  viewMode: "docs",
}
