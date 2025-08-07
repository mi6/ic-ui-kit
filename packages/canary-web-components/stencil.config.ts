import { Config } from "@stencil/core";
import { JsonDocs } from "@stencil/core/internal";
import autoprefixer from "autoprefixer";
import { inlineSvg } from "stencil-inline-svg";
import { postcss } from "@stencil/postcss";
import { reactOutputTarget } from "@stencil/react-output-target";
import { excludeComps } from "../web-components/comps-list";

// If timestamp is undefined, it deletes timestamp from the json doc instead of empty string
interface StencilOverride extends Omit<JsonDocs, "timestamp"> {
  timestamp: string | undefined
}

export const config: Config = {
  namespace: "core",
  globalStyle: "../web-components/src/global/icds.css",
  outputTargets: [
    reactOutputTarget({
      stencilPackageName: "@ukic/canary-web-components",
      outDir: "../canary-react/src",
      excludeComponents: excludeComps,
    }),
    {
      type: "dist-hydrate-script",
    },
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [
        {
          src: "../../web-components/src/global/normalize.css",
          dest: "normalize.css",
        },
      ],
    },
    {
      type: "dist-custom-elements",
      externalRuntime: false,
    },
    {
      type: "www",
      serviceWorker: null,
    },
    {
      type: "docs-readme",
      footer: "",
    },
    {
      type: "docs-json",
      file: "../canary-docs/docs.json",
    },
    {
      type: "docs-custom",
      generator: (docs: StencilOverride) => {
        docs.timestamp = undefined;
      }
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
    },
    setupFilesAfterEnv: ["./src/testspec.setup.ts"],
    transformIgnorePatterns: ["/node_modules/(?!@ukic/web-components)"],
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
