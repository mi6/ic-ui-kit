import { Config } from "@stencil/core";
import { JsonDocs } from "@stencil/core/internal";
import autoprefixer from "autoprefixer";
import { inlineSvg } from "stencil-inline-svg";
import { postcss } from "@stencil/postcss";
import { reactOutputTarget } from "@stencil/react-output-target";

// If timestamp is undefined, it deletes timestamp from the json doc instead of empty string
interface StencilOverride extends Omit<JsonDocs, "timestamp"> {
  timestamp: string | undefined
}

const fs = require("fs");
const path = require("path");
const crypto = require("node:crypto");

const stencilVersion = JSON.parse(
  fs.readFileSync(path.join(__dirname, "package.json"))
).version;

function findVersion(packageName: string) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, "..", packageName, "package.json"))).version;
}

function generateDate() {
  return new Date().toString()
}

function generateHash() {
  return crypto.createHash("sha256").update("bacon").digest("hex");
}

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
        },
      ],
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
      type: "docs-custom",
      generator: (docs: StencilOverride) => {
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
  env: {
    // web components metadata
    IC_UI_KIT_WEB_COMPONENTS_VERSION: Object.freeze(stencilVersion),
    IC_UI_KIT_WEB_COMPONENTS_BUILD_DATE: Object.freeze(generateDate()),
    IC_UI_KIT_WEB_COMPONENTS_BUILD_HASH: Object.freeze(generateHash()),

    // canary web components metadata 
    IC_UI_KIT_CANARY_WEB_COMPONENTS_VERSION: Object.freeze(findVersion("canary-web-components")),
    IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_DATE: Object.freeze(generateDate()),
    IC_UI_KIT_CANARY_WEB_COMPONENTS_BUILD_HASH: Object.freeze(generateHash()),

    // fonts metadata
    IC_UI_KIT_FONTS_VERSION: Object.freeze(findVersion("fonts")),
    IC_UI_KIT_FONTS_BUILD_DATE: Object.freeze(generateDate()),
    IC_UI_KIT_FONTS_BUILD_HASH: Object.freeze(generateHash()),

    // nextjs metadata
    IC_UI_KIT_NEXTJS_VERSION: Object.freeze(findVersion("nextjs")),
    IC_UI_KIT_NEXTJS_BUILD_DATE: Object.freeze(generateDate()),
    IC_UI_KIT_NEXTJS_BUILD_HASH: Object.freeze(generateHash()),

    // reactjs metadata
    IC_UI_KIT_REACT_VERSION: Object.freeze(findVersion("react")),
    IC_UI_KIT_REACT_BUILD_DATE: Object.freeze(generateDate()),
    IC_UI_KIT_REACT_BUILD_HASH: Object.freeze(generateHash()),

    // canary react metadata
    IC_UI_KIT_CANARY_REACT_VERSION: Object.freeze(findVersion("canary-react")),
    IC_UI_KIT_CANARY_REACT_BUILD_DATE: Object.freeze(generateDate()),
    IC_UI_KIT_CANARY_REACT_BUILD_HASH: Object.freeze(generateHash()),

  },
  globalScript: './bootstrap_window.ts'
};
