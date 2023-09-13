import "../src/global/normalize.css"
import "@ukic/fonts/dist/fonts.css";
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
  }
}
