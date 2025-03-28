/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  core: {
    disableTelemetry: true,
  },

  stories: [
    {
      directory: "../../react/src/stories",
      files: "*.mdx",
      titlePrefix: "Nextjs Components",
    },
    {
      directory: "../../react/src/stories",
      files: "*.stories.*",
      titlePrefix: "Nextjs Components",
    },
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
