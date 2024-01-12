module.exports = {
  "core": {
    disableTelemetry: true
  },

  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm"
  ],

  "framework": {
    name: "@storybook/web-components-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
}