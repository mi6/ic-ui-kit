/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    {
      directory: '../../react/src/stories',
      files: '*.stories.*',
      titlePrefix: 'Nextjs Components',
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
  docs: {
    autodocs: true,
  },
};
export default config;
