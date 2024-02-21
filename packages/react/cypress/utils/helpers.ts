/**
 * Set the threshold based on environment. This function requires snapshots to be generated on CI
 * so that the CI threshold is set to 0.
 * @param threshold threshold value to pass visual tests locally
 * @returns {number} the threshold value depending on environment set by CYPRESS_CI
 */
export const setThresholdBasedOnEnv = (threshold: number) => {
    if (!!Cypress.env('CI')) return 0;
  
    return threshold;
  };
    