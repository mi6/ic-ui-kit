import { Config } from "@stencil/core";
import { JsonDocs } from "@stencil/core/internal";
import autoprefixer from "autoprefixer";
import { inlineSvg } from "stencil-inline-svg";
import { postcss } from "@stencil/postcss";
import { reactOutputTarget } from "@stencil/react-output-target";
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

// If timestamp is undefined, it deletes timestamp from the json doc instead of empty string
interface StencilOverride extends Omit<JsonDocs, "timestamp"> {
  timestamp: string | undefined;
}

const componentCorePackage = "@ukic/web-components";

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ["ic-text-field", "ic-search-bar", "ic-switch", "ic-date-input", "ic-date-picker"],
    event: "icChange",
    targetAttr: "value",
    type: "text",
  },
  {
    elementSelectors: ["ic-checkbox"],
    event: "icCheck",
    targetAttr: "checked",
    type: "boolean",
  },
  {
    elementSelectors: ["ic-select"],
    event: "icChange",
    targetAttr: "value",
    type: "select",
  },
  {
    elementSelectors: ["ic-radio-group"],
    event: "icChange",
    targetAttr: "value",
    type: "radio",
  },
  {
    elementSelectors: ["ic-radio-option"],
    event: "icCheck",
    targetAttr: "value",
    type: "radio",
  },
  // {
  //   elementSelectors: ["ic-date-input", "ic-date-picker"],
  //   event: "icChange",
  //   targetAttr: "value",
  //   type: "date"
  // },
];

export const config: Config = {
  namespace: "core",
  globalStyle: "src/global/icds.css",
  outputTargets: [
    reactOutputTarget({
      componentCorePackage,
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
        },
        {
          src: "global/ag-theme-icds.css",
          dest: "ag-theme-icds.css",
        },
        {
          src: "global/icds-table-style.css",
          dest: "icds-table-style.css",
        },
      ],
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "dist-custom-elements",
      dir: "components",
      copy: [
        {
            src: "../scripts/custom-elements",
            dest: "components",
            warn: true
        },
      ]
    },
    angularOutputTarget({
      componentCorePackage,
      outputType: "component",
      directivesProxyFile: "../angular/src/directives/proxies.ts",
      directivesArrayFile: "../angular/src/directives/proxies-list.ts",
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    angularOutputTarget({
      componentCorePackage,
      outputType: "standalone",
      directivesProxyFile: "../angular/standalone/src/directives/proxies.ts",
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: "docs-readme",
      footer: "",
    },
    {
      type: "docs-json",
      file: "../docs/docs.json",
    },
    {
      type: "docs-custom",
      generator: (docs: StencilOverride): void => {
        docs.timestamp = undefined;
      },
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
      "./src/components/*/*.tsx": {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
      "./src/utils/*.ts": {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    setupFilesAfterEnv: ["./src/testspec.setup.ts"],
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
