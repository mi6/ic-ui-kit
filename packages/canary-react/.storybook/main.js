module.exports = {
  "core": {
    builder: "webpack5",
    disableTelemetry: true,
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
    "./addon-tab/register"
  ],
  "framework": "@storybook/react"
}