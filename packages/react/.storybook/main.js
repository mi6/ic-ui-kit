module.exports = {
  "core": {
    disableTelemetry: true
  },

  stories: [
    {
      directory: '../src/stories',
      files: '*.stories.*',
      titlePrefix: 'React Components',
    },
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
    "storybook-addon-performance"
  ],

  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
}