import { defineConfig } from "cypress";
import { config } from '../react/cypress.config'

export default defineConfig({
  component: {
    ...config.component,
    supportFile: "../react/cypress/support/index.ts",
  }
} as Cypress.ConfigOptions) 
