function generateregex(component, style) {
  console.log(`Component: ${component} ${style}`);
  switch (style) {
    case "prop":
      return new RegExp(`<${component}([^>]+)>`, "gm");
    case "component":
      return new RegExp(`${component}\\W`, "gm");
    case "web-component":
      return new RegExp(`${component}\\b[^-]`, "gm");
    case "absolute":
      return new RegExp(`<${component}\\b`, "gm");
  }
}

module.exports = { generateregex };
