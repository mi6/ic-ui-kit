import { Config } from "@stencil/core";
import autoprefixer from "autoprefixer";
import { inlineSvg } from "stencil-inline-svg";
import { postcss } from "@stencil/postcss";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "core",
  globalStyle: "src/global/icds.css",
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "@ukic/web-components",
      proxiesFile: "../react/src/components.ts",
      includeDefineCustomElements: true,
    }),
    {
      type: "dist-hydrate-script",
    },
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [
        {
          src: "global/normalize.css",
          dest: "normalize.css",
        }
      ]
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "docs-readme",
      footer: "",
    },
    {
      type: "docs-json",
      file: "../docs/docs.json",
    },
    {
      type: "docs-vscode",
      file: "vscode-data.json",
    },
    {
      type: "www",
      serviceWorker: null,
    },
  ],
  testing: {
    browserArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
    moduleNameMapper: {
      "\\.svg": "<rootDir>/mocks/svgMock.ts",
    },
    coverageThreshold: {
      './src/components/*/*.tsx': {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
      './src/utils/*.ts': {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      }
    },
    setupFilesAfterEnv: [
      "./src/testspec.setup.ts"
    ]
  },
  plugins: [
    inlineSvg(),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  extras: {
    experimentalImportInjection: true,
  },
};
