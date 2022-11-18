import "@ukic/fonts/dist/fonts.css";
import "@ukic/web-components/dist/core/core.css";

export const parameters = {
    controls: { 
        matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      hideNoControlsWarning: true
    }
  }