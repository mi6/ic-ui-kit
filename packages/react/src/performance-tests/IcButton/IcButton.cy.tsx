/// <reference types="@cypress-audit/lighthouse" />

const customThresholds = {
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

describe("Performance testing", () => {
  it("should render single button within performance thresholds", () => {
    cy.visit("/packages/react/src/performance-tests/IcButton/ic-button.html");
    cy.task("setLighthouseReportName", "lighthouse-single-button");
    cy.lighthouse(customThresholds, desktopConfig, lighthouseConfig);
  });

  it("should render multiple buttons within performance thresholds", () => {
    cy.visit(
      "/packages/react/src/performance-tests/IcButton/ic-button-multiple.html"
    );
    cy.task("setLighthouseReportName", "lighthouse-multiple-buttons");
    cy.lighthouse(customThresholds, desktopConfig, lighthouseConfig);
  });
});
