const { generateregex } = require("./generate-regex");

function compareComponent(stringArray, jsonData) {
  let fileString = stringArray;

  const componentsAffected = new Set(
    jsonData.map((entry) => {
      return entry.componentsAffected;
    })
  );

  componentsAffected.forEach((component) => {
    const regex = generateregex(
      component,
      jsonData.filter((field) => field.componentsAffected === component)[0].type
    );
    const match = fileString.match(regex);
    if (match) {
      const oldProps = jsonData.reduce((total, field) => {
        if (field.componentsAffected === component) total.push(field.v2Name);
        return total;
      }, []);
      match.forEach((component) => {
        oldProps.filter((prop) => {
          component.includes(prop);
        });
        let newComponent = component;
        oldProps.forEach((prop) => {
          const newProp = jsonData.find(
            (field) => field.v2Name === prop
          ).v3Name;
          newComponent = newComponent.replace(prop, newProp);
        });
        fileString = fileString.replace(component, newComponent);
      });
    }
  });

  return fileString;
}

module.exports = { compareComponent };
