module.exports = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    {
      directory: "../src/stories",
      files: "*.mdx",
      titlePrefix: "React Components",
    },
    {
      directory: "../src/stories",
      files: "*.stories.*",
      titlePrefix: "React Components",
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
    "storybook-addon-performance",
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes("node_modules");
        }
        return true;
      },
    },
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
    });
    return config;
  },
};
