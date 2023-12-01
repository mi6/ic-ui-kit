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
