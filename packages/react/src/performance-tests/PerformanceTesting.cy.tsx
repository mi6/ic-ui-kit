/// <reference types="@cypress-audit/lighthouse" />

//Lighthouse thresholds
const thresholds = {
  performance: 80,
  accessibility: 100,
  "best-practices": 90,
  "first-contentful-paint": 2000,
  "largest-contentful-paint": 3000,
  "speed-index": 2000,
};

const desktopConfig = {
  formFactor: "desktop",
  screenEmulation: { disabled: true },
};

const lighthouseConfig = {
  settings: { output: "html" },
  extends: "lighthouse:default",
};

// Cypress tests
describe("Button performance", () => {
  it("should render single button within performance thresholds", () => {
    cy.visit("http://localhost:3001/#/buttons");
    cy.task("setLighthouseReportName", "lighthouse-single-button");
    cy.lighthouse(thresholds, desktopConfig, lighthouseConfig);
  });

  it("should render multiple buttons within performance thresholds", () => {
    cy.visit("http://localhost:3001/#/multiple-buttons");
    cy.task("setLighthouseReportName", "lighthouse-multiple-buttons");
    cy.lighthouse(thresholds, desktopConfig, lighthouseConfig);
  });
});

describe("Checkbox performance", () => {
  it("should render single checkbox within performance thresholds", () => {
    cy.visit("http://localhost:3001/#/checkbox");
    cy.task("setLighthouseReportName", "lighthouse-single-checkbox");
    cy.lighthouse(thresholds, desktopConfig, lighthouseConfig);
  });
});
