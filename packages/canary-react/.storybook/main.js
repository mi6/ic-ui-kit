module.exports = {
  core: {
    disableTelemetry: true,
  },

  stories: [
    "../src/getting-started.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
    "storybook-addon-performance",
    "./addon-tab/register",
    "@storybook/addon-webpack5-compiler-babel",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
