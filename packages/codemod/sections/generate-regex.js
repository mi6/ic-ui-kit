const webComponentImport = "@ukic/web-components";
const reactImport = "@ukic/react";
const canaryWebComponentsImport = "@ukic/canary-web-components";
const canaryReactImport = "@ukic/canary-react";

/**
 *
 * @param {*} component
 * @param {*} style
 * @returns correct regex expression for the change based of predefined types in json files
 */
export function generateRegex(component, style) {
  switch (style) {
    case "prop":
      return new RegExp(`<${component}[^\/|<]+`, "gm");
    case "component":
      return new RegExp(`${component}\\b`, "gm");
    case "web-component":
      return new RegExp(`${component}\\b(?!-)`, "gm");
    case "absolute":
      return new RegExp(`${component}`, "gm");
    case "test-simple":
      return new RegExp(`[[.]${component}\\b`, "gm");
  }
}
