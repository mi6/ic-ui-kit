//common functions to be used across all a11y tests
export const checkShadowElementRendersCorrectly = (el) => {
    var _a;
    expect((_a = el.shadowRoot) === null || _a === void 0 ? void 0 : _a.innerHTML).not.toBe("");
};
export const checkLightElementRendersCorrectly = (el) => {
    expect(el.innerHTML).not.toBe("");
};
//# sourceMappingURL=testa11y.helpers.js.map
