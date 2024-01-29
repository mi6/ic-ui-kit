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

export const CYPRESS_AXE_REPORTING = (axeResults) => {
  if (axeResults.length > 0) {
    console.log('AXE VIOLATION REPORTING:', axeResults);
    
    axeResults.violations.forEach(violation => {
      console.log('Violation:', violation.id);
      console.log('Impact:', violation.impact);
      console.log('Nodes affected:', violation.node.length);
      
      violation.nodes.forEach((node) => {
        console.log('Node HTML:', node.html);
        console.log('Node Impact:', node.impact);
        console.log('Node Target:', node.target);
      })
    });}
}
