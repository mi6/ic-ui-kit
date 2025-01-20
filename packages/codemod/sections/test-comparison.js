/**
 *
 * @param {*} stringArray
 * @param {*} jsonData
 * @param {*} jsonData
 * @returns File string with changes
 *
 * This function is used to compare prop name changes for components and if they are required to change in the file
 *
 * This is currently not in use, it will be kept here for future use as can be refactored to work with styled components if the need arises
 */
export function testComparison(stringArray, jsonData) {
  let fileString = stringArray;

  const componentsAffected = new Set(
    jsonData.map((entry) => entry.componentsAffected)
  );

  componentsAffected.forEach((component) => {
    const regex = new RegExp(
      `const .*=.*querySelector[(]([^'"]+?).*${component}.*'`,
      "gm"
    );
    const match = fileString.match(regex);
    if (match !== null) {
      const variableNames = match.map((line) => {
        const split = line.split("=");
        const variableName = split[0].replace("const", "").trim();
        return variableName;
      });

      const variableNamesArray = Array.from(new Set(variableNames));
      variableNamesArray.forEach((variable) => {
        const regex = new RegExp(`${variable}[.].*?[)]`, "gm");
        const match = fileString.match(regex);
        if (match !== null) {
          match.map((line) => {
            const split = line.split(".");
            const prop = split[1].replace(")", "");
            const newProp = jsonData.find(
              (field) => field.v2Name === prop
            ).v3Name;

            const newFile = fileString.replaceAll(
              `${variable}.${prop}`,
              `${variable}.${newProp}`
            );
            fileString = newFile;
          });
        }
      });
    }
  });

  return fileString;
}
