//common functions to be used across all a11y tests

export const checkShadowElementRendersCorrectly = (el: Element): void => {
  expect(el.shadowRoot.innerHTML).not.toBe("");
};

export const checkLightElementRendersCorrectly = (el: Element): void => {
  expect(el.innerHTML).not.toBe("");
};
