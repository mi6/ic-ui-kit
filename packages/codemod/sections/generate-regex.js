function generateregex(component, style) {
  switch (style) {
    case "prop":
      return new RegExp(`<${component}([^>]+)>`, "gm");
    case "component":
      return new RegExp(`${component}\b`, "gm");
    case "absolute":
      return new RegExp(`<${component}([^>]+)>`, "gm");
  }
}

module.exports = { generateregex };
