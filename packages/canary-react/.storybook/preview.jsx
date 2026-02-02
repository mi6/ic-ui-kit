import "@ukic/fonts/dist/fonts.css";
import "../dist/core/core.css";
import "../dist/core/normalize.css";
import "@ukic/web-components/dist/core/icds-table-style.css";

import { IcTheme } from "@ukic/react";
import React from "react";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      hideNoControlsWarning: true,
    },
    options: {
      storySort: {
        method: "configure",
        includeNames: true,
        order: ["*", ["*", ["Docs", "Playground"]]],
      },
    },
    viewMode: "docs",
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light mode", left: "☀️" },
          { value: "dark", title: "Dark mode", left: "🌙" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme || "light";
      const backgroundColor =
        selectedTheme === "dark"
          ? "var(--ic-color-page-background-dark)"
          : "var(--ic-color-background-primary-light)";
      return (
        <>
          <style>
            {`
              .sb-show-main, .sbdocs-preview {
                background-color: ${backgroundColor};
              }
            `}
          </style>
          <IcTheme theme={selectedTheme}>{story()}</IcTheme>
        </>
      );
    }
  ],
};

export default preview;
