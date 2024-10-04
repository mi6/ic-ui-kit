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
    "@storybook/addon-mdx-gfm",
    "storybook-addon-performance",
    "./addon-tab/register"
  ],

  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  }
}