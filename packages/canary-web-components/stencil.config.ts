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
      componentCorePackage: "@ukic/canary-web-components",
      proxiesFile: "../canary-react/src/components.ts",
      includeDefineCustomElements: true, // TODO: Is this required or can guidance be provided to import @ukic/web-component as a dep
      excludeComponents: [
        // These components are provided by @ukic/web-components
        'ic-accordion',
        'ic-accordion-group',
        'ic-alert',
        'ic-back-to-top',
        'ic-badge',
        'ic-breadcrumb',
        'ic-breadcrumb-group',
        'ic-button',
        'ic-card',
        'ic-checkbox',
        'ic-checkbox-group',
        'ic-chip',
        'ic-classification-banner',
        'ic-data-entity',
        'ic-data-row',
        'ic-dialog',
        'ic-divider',
        'ic-empty-state',
        'ic-footer',
        'ic-footer-link',
        'ic-footer-link-group',
        'ic-hero',
        'ic-horizontal-scroll',
        'ic-input-component-container',
        'ic-input-container',        
        'ic-input-label',
        'ic-input-validation',
        'ic-link',
        'ic-loading-indicator',
        'ic-menu',        
        'ic-menu-group',
        'ic-menu-item',
        'ic-navigation-button',
        'ic-navigation-group',
        'ic-navigation-item',        
        'ic-navigation-menu',
        'ic-page-header',
        'ic-pagination',
        'ic-pagination-item',
        'ic-popover-menu',
        'ic-radio-group',
        'ic-radio-option',
        'ic-search-bar',
        'ic-section-container',
        'ic-select',
        'ic-side-navigation',
        'ic-skeleton',
        'ic-status-tag',
        'ic-step',
        'ic-stepper',
        'ic-switch',
        'ic-tab',
        'ic-tab-context',
        'ic-tab-group',
        'ic-tab-panel',
        'ic-text-field',
        'ic-theme',
        'ic-toast',
        'ic-toast-region',
        'ic-tooltip',
        'ic-top-navigation',
        'ic-typography',
      ]
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
      }
    },
    setupFilesAfterEnv: [
      "./src/testspec.setup.ts"
    ],
    transformIgnorePatterns: ["/node_modules/(?!@ukic/web-components)"]
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
