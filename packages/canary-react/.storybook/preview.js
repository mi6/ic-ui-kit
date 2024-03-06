import "@ukic/web-components/dist/core/normalize.css";
import "@ukic/fonts/dist/fonts.css";
import "@ukic/web-components/dist/core/core.css";
import "../../canary-web-components/src/global/icds.css";

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