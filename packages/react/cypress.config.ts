/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
import webpackConfig from "./.webpack/webpack.config";

const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const fs = require("fs");

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
  e2e: {
    specPattern: "./src/performance-tests/*.cy.tsx",
    baseUrl: "http://localhost:3001/",
    setupNodeEvents(on, config) {
      let lighthouseReportName = '';

      on("before:browser:launch", (_browser, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        setLighthouseReportName: (name) => {       
          lighthouseReportName = name;
          return null;             
        },

        lighthouse: lighthouse((lighthouseReport) => {
          const folderPath = "cypress-lighthouse-reports";
          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
          }
  
          const filePath = `${folderPath}/${lighthouseReportName}.html`;
  
          fs.writeFile(filePath, lighthouseReport.report, (error: any) => {
            error ? console.log(error) : console.log("Report created successfully");
          });

          return null;
        }),
      });

      config.browsers = config.browsers.filter((b) => b.name == 'chrome')
      return config;
    },
    retries: {
      runMode: 3,
      openMode: 0
    },
  },
}

export default defineConfig(config);
