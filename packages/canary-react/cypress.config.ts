import { defineConfig } from "cypress";
import { config } from '../react/cypress.config'

export default defineConfig({
  env: {
    ci: process.env.CYPRESS_CI ?? false
  },
  component: {
    ...config.component,
    supportFile: "../react/cypress/support/index.ts",
    retries: {
       runMode: 3,
       openMode: 0
     },
  },
} as Cypress.ConfigOptions) 
