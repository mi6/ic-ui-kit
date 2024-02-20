module.exports = {
  "core": {
    disableTelemetry: true
  },

  "stories": [
    "../src/getting-started.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mdx-gfm",
    "./addon-tab/register"
  ],

  "framework": {
    name: "@storybook/web-components-webpack5",
    options: {}
  },  
}