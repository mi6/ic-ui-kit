import "../dist/core/normalize.css";
import "@ukic/fonts/dist/fonts.css";
import "../dist/core/core.css";
import "./storybook.css";

export const parameters = {
    controls: { 
        matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      hideNoControlsWarning: true
    },
    options: {
      storySort: {
        method: 'configure',
        includeNames: true,
        order: ['*', ['*', ['Docs', 'Playground']]],
      },
    },
  }
export const tags = ["autodocs"];
