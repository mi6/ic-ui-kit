import { generateRegex } from "./generate-regex.js";
import { changes } from "../data/data.js";
/**
 *
 * @param {*} stringArray
 * @param {*} jsonData
 * @returns file string with changes made by comparing v2 and v3 names in predefined json file
 */
export function simpleTestComparison(stringArray) {
  let fileString = stringArray;

  Object.keys(changes).forEach((component) => {
    changes[component].map((field) => {
      let regex = "";
      if (field.type === "prop" || field.type === "absolute")
        regex = generateRegex(field.v2, "test-simple");
      else regex = generateRegex(field.v2, field.type);
      const match = fileString.match(regex);
      if (match) {
        fileString = fileString.replaceAll(field.v2, field.v3);
      }
    });
  });

  return fileString;
}
