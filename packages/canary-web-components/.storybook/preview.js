import "../dist/core/normalize.css";
import "@ukic/fonts/dist/fonts.css";
import "../dist/core/core.css";
import "./storybook-overrides.css";

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

