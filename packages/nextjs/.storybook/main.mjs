/** @type { import('@storybook/nextjs-vite').StorybookConfig } */
export default {
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
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  async viteFinal(config) {
    config.assetsInclude = ['**/*.md']
    return config;
  },
};
