/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";

export const config = {
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    fixturesFolder: "./src/component-tests",
    setupNodeEvents(on, config) {
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
      getCompareSnapshotsPlugin(on, config);
      on('before:browser:launch', (_browser, launchActions) => {
        launchActions.preferences.width = 1600;
        launchActions.preferences.height = 1080;
        return launchActions;
      });
      config.browsers = config.browsers.filter((b) => b.name == 'electron')
      return config;
    },
    supportFile: "./cypress/support/index.ts",
    retries: 3,
  },
}

export default defineConfig(config as Cypress.ConfigOptions);
