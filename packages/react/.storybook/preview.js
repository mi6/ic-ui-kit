import "@ukic/web-components/dist/core/normalize.css";
import "@ukic/fonts/dist/fonts.css";
import "./storybook.css";
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