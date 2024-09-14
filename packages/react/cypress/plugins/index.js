import webpack from '@cypress/webpack-preprocessor'
const { lighthouse, prepareAudit } = require("cypress-audit");

export default on => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../.webpack/webpack.config'),
    watchOptions: {}
  }

  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    lighthouse: lighthouse(), // calling the function is important
  });

  on('file:preprocessor', webpack(options))
}
