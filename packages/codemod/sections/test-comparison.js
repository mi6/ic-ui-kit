/**
 *
 * @param {*} stringArray
 * @param {*} jsonData
 * @param {*} jsonData
 * @returns File string with changes
 *
 * This function is used to compare prop name changes for components and if they are required to change in the file
 * It is currently specifically for test files
 */
function testComparison(stringArray, jsonData) {
  let fileString = stringArray;

  //what is relevant
  const componentsAffected = new Set(
    jsonData.map((entry) => {
      return entry.componentsAffected;
    })
  );

  //check if the component is in the file
  componentsAffected.forEach((component) => {
    const regex = new RegExp(
      `const .*=.*querySelector[(]([^'"]+?).*${component}.*'`,
      "gm"
    );
    const match = fileString.match(regex);
    //component is in the file
    if (match !== null) {
      //find the variable name used for the component
      const variableNames = match.map((line) => {
        const split = line.split("=");
        const variableName = split[0].replace("const", "").trim();
        return variableName;
      });

      const variableNamesArray = Array.from(new Set(variableNames));
      //find the props used in the component and if they are subject to change
      variableNamesArray.forEach((variable) => {
        const regex = new RegExp(`${variable}[.].*?[)]`, "gm");
        const match = fileString.match(regex);
        if (match !== null) {
          //found relevant props to change
          match.map((line) => {
            const split = line.split(".");
            const prop = split[1].replace(")", "");
            const newProp = jsonData.find(
              (field) => field.v2Name === prop
            ).v3Name;
            //replace the old prop with the new prop based on previously found variable names
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
  //return the new file string
  return fileString;
}
module.exports = { testComparison };
