/**
 *
 * @param {*} component
 * @param {*} style
 * @returns correct regex expression for the change based of predefined types in json files
 */

function generateRegex(component, style) {
  switch (style) {
    case "prop":
      return new RegExp(`<${component}([^>]+)>`, "gm");
    case "component":
      return new RegExp(`${component}\\W`, "gm");
    case "web-component":
      return new RegExp(`${component}\\b[^-]`, "gm");
    case "absolute":
      return new RegExp(`<${component}([^>]+)>`, "gm");
    case "absolute-props":
      return new RegExp(`${component}\\b[^'"]`, "gm");
    case "test-simple":
      return new RegExp(`[[.]${component}\\b`, "gm");
  }
}

export { generateRegex };
