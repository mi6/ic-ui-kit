import { generateRegex } from "./generate-regex.js";

/**
 *
 * @param {*} stringArray
 * @param {*} jsonData
 * @returns File string with changes made by comparing v2 and v3 names in predefined json file
 */
export function compareComponent(stringArray, jsonData) {
  let fileString = stringArray;

  const componentsAffected = new Set(
    jsonData.map((entry) => entry.componentsAffected)
  );

  componentsAffected.forEach((component) => {
    const regex = generateRegex(
      component,
      jsonData.filter((field) => field.componentsAffected === component)[0].type
    );
    const match = String(fileString).match(regex);
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
          const newProp = jsonData.find((field) => field.v2Name === prop);
          if (newProp.type === "absolute") {
            const regex = generateRegex(newProp.v2Name, "absolute-props");
            const exactMatch = String(newComponent).match(regex);
            if (exactMatch)
              newComponent = newComponent.replace(prop, newProp.v3Name);
          } else newComponent = newComponent.replace(prop, newProp.v3Name);
        });
        fileString = fileString.replace(component, newComponent);
      });
    }
  });

  return fileString;
}
