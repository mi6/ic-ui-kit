import "@ukic/fonts/dist/fonts.css";
import "../dist/core/core.css";
import "../dist/core/normalize.css";

import { defineCustomElements } from "../dist/esm/loader";

defineCustomElements();

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    hideNoControlsWarning: true,
  },
  options: {
    storySort: {
      method: 'configure',
      includeNames: true,
      order: ['*', ['*', ['Docs', 'Playground']]],
    },
  },
  viewMode: "docs",
};
