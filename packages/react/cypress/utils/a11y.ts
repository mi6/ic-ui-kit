import { Result } from "axe-core";

/**
 * Configuration for cypress-axe
 *
 * The following rules are disabled because we're not testing a full webpage, just a small component snippet.
 * Ensure that only relevant rules are disabled for your component.
 */
export const CYPRESS_AXE_OPTIONS = {
  rules: {
    "page-has-heading-one": { enabled: false },
    "html-has-lang": { enabled: false },
    "landmark-one-main": { enabled: false },
    region: { enabled: false },
  },
};

export const CYPRESS_AXE_REPORTING = (axeResults: Result[]): void => {
  if (axeResults.length > 0) {
    console.log('AXE VIOLATION REPORTING:', axeResults);
    
    axeResults.forEach(({ id, impact, nodes }) => {
      console.log('Violation:', id);
      console.log('Impact:', impact);
      console.log('Nodes affected:', nodes.length);
      
      nodes.forEach(({ html, impact, target }) => {
        console.log('Node HTML:', html);
        console.log('Node Impact:', impact);
        console.log('Node Target:', target);
      });
    });
  }
}
