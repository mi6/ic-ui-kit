const { generateregex } = require("./generateregex");

function regexCompareComponent(stringArray, jsonData, reactData) {
  let fileString = stringArray;

  const componentsAffected = new Set(
    reactData.map((entry) => {
      return entry.componentsAffected;
    })
  );

  componentsAffected.forEach((component) => {
    console.log(`Component: ${component} ${component.length}`);
    const regex = generateregex(
      component,
      reactData.filter((field) => field.componentsAffected === component)[0]
        .type
    );
    const match = fileString.match(regex);
    console.log(`Match found: ${match}`);
    if (match) {
      const oldProps = reactData.reduce((total, field) => {
        if (field.componentsAffected === component) total.push(field.v2Name);
        return total;
      }, []);
      match.forEach((component) => {
        oldProps.filter((prop) => {
          component.includes(prop);
        });
        let newComponent = component;
        oldProps.forEach((prop) => {
          const newProp = reactData.find(
            (field) => field.v2Name === prop
          ).v3Name;

          newComponent = newComponent.replace(prop, newProp);
        });
        console.log(`New Component: ${newComponent}`);
        fileString = fileString.replace(component, newComponent);
      });
    }
  });

  return fileString;
}

module.exports = { regexCompareComponent };
