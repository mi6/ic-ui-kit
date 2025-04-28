import { generateRegex } from "./generate-regex.js";
import { changes } from "../data/data.js";

export function convertComponents(stringArray) {
  let fileString = stringArray;
  // loop round each component
  Object.keys(changes).forEach((component) => {
    // find component regex (e.g. <Component ... />)
    const regex = generateRegex(component, "prop");

    // find if component exists in file
    const match = String(fileString).match(regex);

    // if there are components
    if (match) {
      //loop each of the found components
      match.forEach((matchComponent) => {
        // maintain the original component for comparison
        let newComponent = matchComponent;
        // loop through each of the changes for the component
        changes[component].forEach((field) => {
          // check type of change required
          switch (field.type) {
            /*
             ** if only prop name changes (e.g. prop="old" -> newProp="old")
             */
            case "prop":
              newComponent = newComponent.replace(field.v2, field.v3);
              break;

            /*
             ** if change is both prop name and value changes (e.g. prop="old" -> newProp="new")
             */
            case "absolute":
              newComponent = newComponent.replace(
                generateRegex(field.v2, "absolute"),
                field.v3
              );
              break;

            /*
             ** component name change (e.g. <oldComponent ... /> -> <newComponent ... />)
             */
            case "component":
              fileString = fileString.replace(
                generateRegex(field.v2, "component"),
                field.v3
              );
              break;
            case "web-component":
              fileString = fileString.replace(
                generateRegex(field.v2, "web-component"),
                field.v3
              );
              break;
          }
        });
        fileString = fileString.replace(matchComponent, newComponent);
      });
    }
  });
  return fileString;
}
