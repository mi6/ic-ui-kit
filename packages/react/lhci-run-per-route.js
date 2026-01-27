#!/usr/bin/env node

/**
 * LHCI Per-Route Runner
 * Runs Lighthouse CI for each component route separately with tailored assertions
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Global performance thresholds
const GLOBAL_THRESHOLDS = {
  performance: 0.98,
  accessibility: 1.0,
  fcp: 500,                     // First Contentful Paint (ms)
  lcp: 1000,                    // Largest Contentful Paint (ms)
  cls: 0.1                      // Cumulative Layout Shift
};

// Component-specific performance thresholds (override global for specific components)
const COMPONENT_PERFORMANCE_OVERRIDES = {
  "checkbox-multiple": 0.96
};

// Component-specific accessibility thresholds (override global for specific components)
const COMPONENT_ACCESSIBILITY_OVERRIDES = {
  "select-variants": 0.95,
  "searchable-select-variants": 0.95,
  "multi-select-variants": 0.95,
  "searchbar-variants": 0.95,
  "radio-variants": 0.95,
  "stepper": 0.95,
  "text-field-variants": 0.94,
  "chip-multiple": 0.94
};

const COMPONENTS = [
  { name: "button" },
  { name: "button-multiple" },
  { name: "button-variants" },
  { name: "button-events" },
  { name: "checkbox" },
  { name: "checkbox-multiple" },
  { name: "checkbox-basic-multiple" },
  { name: "side-navigation" },
  { name: "side-navigation-expanded" },
  { name: "top-navigation" },
  { name: "top-navigation-basic" },
  { name: "popover-menu" },
  { name: "popover-menu-multiple" },
  { name: "popover-menu-multiple-not-rendered" },
  { name: "accordion" },
  { name: "accordion-multiple" },
  { name: "dialog" },
  { name: "dialog-multiple" },
  { name: "dialog-slotted-content" },
  { name: "dialog-all-open" },
  { name: "select" },
  { name: "select-variants" },
  { name: "select-multiple" },
  { name: "searchable-select" },
  { name: "searchable-select-variants" },
  { name: "searchable-select-multiple" },
  { name: "multi-select" },
  { name: "multi-select-variants" },
  { name: "multi-select-multiple" },
  { name: "searchbar" },
  { name: "searchbar-variants" },
  { name: "searchbar-multiple" },
  { name: "radio" },
  { name: "radio-variants" },
  { name: "radio-multiple" },
  { name: "toast" },
  { name: "toast-variants" },
  { name: "toast-multiple" },
  { name: "hero" },
  { name: "page-header" },
  { name: "footer" },
  { name: "stepper" },
  { name: "pagination" },
  { name: "tabs" },
  { name: "card-vertical" },
  { name: "card-vertical-multiple" },
  { name: "alert" },
  { name: "alert-multiple" },
  { name: "toggle-button" },
  { name: "toggle-button-multiple" },
  { name: "toggle-button-variants" },
  { name: "toggle-button-group-variants" },
  { name: "text-field" },
  { name: "text-field-multiple" },
  { name: "text-field-variants" },
  { name: "switch" },
  { name: "switch-multiple" },
  { name: "chip" },
  { name: "chip-multiple" },
  { name: "data-list" },
  { name: "data-list-multiple" },
  { name: "classification-banner" },
  { name: "empty-state" }
];

const THEMES = ["light", "dark"];

// Generate routes dynamically: each component × each theme
const routes = [];
for (const component of COMPONENTS) {
  for (const theme of THEMES) {
    routes.push({
      name: `${component.name}-${theme}`,
      url: `http://localhost:3001/#/${component.name}?theme=${theme}`
    });
  }
}

function generateConfigForRoute(route) {
  // Determine performance and accessibility thresholds: use component override if available, otherwise use global
  const componentName = route.name.split("-").slice(0, -1).join("-"); // Remove theme suffix
  const performanceThreshold = COMPONENT_PERFORMANCE_OVERRIDES[componentName] || GLOBAL_THRESHOLDS.performance;
  const accessibilityThreshold = COMPONENT_ACCESSIBILITY_OVERRIDES[componentName] || GLOBAL_THRESHOLDS.accessibility;

  return {
    ci: {
      collect: {
        startServerCommand: "npx serve -p 3001 ./dist-perf",
        startServerReadyPattern: "3001|ready|listen",
        url: [route.url],
        numberOfRuns: 1,
        settings: {
          preset: "desktop"
        }
      },
      assert: {
        assertions: {
          "categories:performance": ["error", { minScore: performanceThreshold }],
          "first-contentful-paint": ["warn", { maxNumericValue: GLOBAL_THRESHOLDS.fcp }],
          "largest-contentful-paint": ["warn", { maxNumericValue: GLOBAL_THRESHOLDS.lcp }],
          "cumulative-layout-shift": ["warn", { maxNumericValue: GLOBAL_THRESHOLDS.cls }],
          "categories:accessibility": ["error", { minScore: accessibilityThreshold }]
        }
      },
      upload: {
        target: "filesystem",
        outputDir: `./lhci-reports/${route.name}`
      }
    }
  };
}

async function runLhciForRoute(route) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`Running LHCI for: ${route.name}`);
  console.log(`URL: ${route.url}`);
  console.log(`${"=".repeat(60)}\n`);

  // Clean up previous reports for this route to ensure fresh overwrites
  const routeReportDir = path.join(__dirname, `lhci-reports/${route.name}`);
  if (fs.existsSync(routeReportDir)) {
    fs.rmSync(routeReportDir, { recursive: true, force: true });
  }

  // Generate config for this route
  const config = generateConfigForRoute(route);
  const configPath = path.join(__dirname, `.lighthouserc.${route.name}.json`);
  
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  try {
    // Run LHCI with the specific config
    execSync(`npx lhci autorun --config=${configPath}`, {
      stdio: "inherit",
      cwd: __dirname
    });
    
    console.log(`✅ ${route.name} completed successfully\n`);
    return { route: route.name, status: "passed" };
  } catch (error) {
    console.error(`❌ ${route.name} failed\n`);
    return { route: route.name, status: "failed", error: error.message };
  } finally {
    // Clean up config file
    try {
      fs.unlinkSync(configPath);
    } catch (e) {
      // ignore cleanup errors
    }
  }
}

async function main() {
  console.log("Starting LHCI Per-Route Runner\n");
  
  // Create reports directory if it doesn't exist
  const reportsDir = path.join(__dirname, "lhci-reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const results = [];
  let failedCount = 0;

  // Run LHCI for each route sequentially
  for (const route of routes) {
    const result = await runLhciForRoute(route);
    results.push(result);
    if (result.status === "failed") {
      failedCount++;
    }
  }

  // Summary
  console.log(`\n${"=".repeat(60)}`);
  console.log("LHCI Per-Route Summary");
  console.log(`${"=".repeat(60)}`);
  
  results.forEach(result => {
    const icon = result.status === "passed" ? "✅" : "❌";
    console.log(`${icon} ${result.route.padEnd(25)} ${result.status.toUpperCase()}`);
  });

  console.log(`${"=".repeat(60)}`);
  console.log(`Total: ${results.length} | Passed: ${results.length - failedCount} | Failed: ${failedCount}\n`);

  if (failedCount > 0) {
    console.error("❌ Some routes failed assertions. Check reports in ./lhci-reports/\n");
    process.exit(1);
  } else {
    console.log("✅ All routes passed assertions!\n");
    process.exit(0);
  }
}

main().catch(error => {
  console.error("Fatal error:", error);
  process.exit(1);
});
