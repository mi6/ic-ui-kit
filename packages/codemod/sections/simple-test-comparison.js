import { generateRegex } from "./generate-regex.js";

/**
 *
 * @param {*} stringArray
 * @param {*} jsonData
 * @returns file string with changes made by comparing v2 and v3 names in predefined json file
 */
export function simpleTestComparison(stringArray, jsonData) {
  let fileString = stringArray;

  const componentsToChange = new Set(jsonData.map((entry) => entry.v2Name));

  componentsToChange.forEach((component) => {
    const regex = generateRegex(component, "test-simple");
    const match = fileString.match(regex);
    if (match) {
      const newProp = jsonData.find((field) => match[0].includes(field.v2Name));
      if (newProp) {
        fileString = fileString.replaceAll(component, newProp.v3Name);
      }
    }
  });

  return fileString;
}
