export default {
  core: {
    disableTelemetry: true,
  },

  stories: [
    "../src/*.mdx",
    "../src/**/**/*.mdx",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },

  async viteFinal(config, { configType }) {
    config.assetsInclude = ["**/*.md"];

    if (configType === "DEVELOPMENT") {
      // Set outDir to something other than 'dist' to avoid conflict with Stencil's 'dist' directory
      config.build = { ...(config.build || {}), outDir: "dist-vite" };
    }

    return config;
  },

  docs: {},
};
