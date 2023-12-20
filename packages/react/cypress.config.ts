/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    fixturesFolder: "./src/component-tests",
    setupNodeEvents(on, config) {
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
      getCompareSnapshotsPlugin(on, config);
      on('before:browser:launch', (browser, launchActions) => {
        if (browser.name === 'electron') {
          launchActions.preferences.width = 1600;
          launchActions.preferences.height = 1080;
        }
        if (browser.name === 'chrome') {
          launchActions.args.push('--window-size=1600,1080')
        }
        return launchActions;
      })
    },
    supportFile: "./cypress/support/index.ts",
    retries: 1,
  },
});
