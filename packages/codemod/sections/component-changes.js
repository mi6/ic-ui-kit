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
              fileString = fileString.replace(matchComponent, newComponent);
              break;

            /*
             ** if change is both prop name and value changes (e.g. prop="old" -> newProp="new")
             */
            case "absolute":
              newComponent = newComponent.replace(
                generateRegex(field.v2, "absolute"),
                field.v3
              );
              fileString = fileString.replace(matchComponent, newComponent);
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
          }
        });
      });
    }
  });
  return fileString;
}

// /**
//  *
//  * @param {*} stringArray
//  * @param {*} jsonData
//  * @returns File string with changes made by comparing v2 and v3 names in predefined json file
//  */
// export function compareComponent(stringArray, jsonData) {
//   let fileString = stringArray;
//   const componentsAffected = new Set(
//     jsonData.map((entry) => entry.componentsAffected)
//   );

//   componentsAffected.forEach((component) => {
//     const regex = generateRegex(
//       component,
//       jsonData.filter((field) => field.componentsAffected === component)[0].type
//     );
//     const match = String(fileString).match(regex);
//     if (match) {
//       const oldProps = jsonData.reduce((total, field) => {
//         if (field.componentsAffected === component) total.push(field.v2Name);
//         return total;
//       }, []);
//       match.forEach((component) => {
//         oldProps.filter((prop) => {
//           component.includes(prop);
//         });
//         let newComponent = component;
//         oldProps.forEach((prop) => {
//           const newProp = jsonData.find((field) => field.v2Name === prop);
//           if (newProp.type === "absolute") {
//             const regex = generateRegex(newProp.v2Name, "absolute-props");
//             const exactMatch = String(newComponent).match(regex);
//             if (exactMatch) {
//               newComponent = newComponent.replace(
//                 exactMatch[0],
//                 newProp.v3Name
//               );
//             }
//           } else newComponent = newComponent.replace(prop, newProp.v3Name);
//         });
//         fileString = fileString.replace(component, newComponent);
//       });
//     }
//   });
//   return fileString;
// }
