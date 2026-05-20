/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
import webpackConfig from "./.webpack/webpack.config";

export const config: Cypress.ConfigOptions = {
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig
    },
    fixturesFolder: "./src/component-tests",
    setupNodeEvents(on, config) {
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");
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
    retries: {
      runMode: 3,
      openMode: 0
    },
  },
}

export default defineConfig(config);
