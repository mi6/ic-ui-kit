export default {
  "core": {
    disableTelemetry: true
  },

  "stories": [
    "../src/*.mdx",
    "../src/**/**/*.mdx",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],

  "framework": {
    name: "@storybook/web-components-vite",
    options: {}
  },
  async viteFinal(config) {
    config.assetsInclude = ['**/*.md']
    return config;
  },
  docs: {}
}