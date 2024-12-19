/**
 *
 * @param {*} stringArray
 * @param {*} jsonData
 * @param {*} reactJsonData
 * @returns File string with changes
 *
 * This function is used to compare prop name changes for components and if they are required to change in the file
 * It is currently specifically for test files
 */
function regexCompare(stringArray, jsonData, reactJsonData) {
  let fileString = stringArray;

  //what is relevant
  const componentsAffected = new Set(
    jsonData.map((entry) => {
      return entry.componentsAffected;
    })
  );

  //check if the component is in the file
  componentsAffected.forEach((component) => {
    console.log(`Component: ${component}`);
    const regex = new RegExp(
      `const .*=.*querySelector[(]([^'"]+?).*${component}.*'`,
      "gm"
    );
    const match = fileString.match(regex);
    //component is in the file
    if (match !== null) {
      console.log(`Match found: ${match}`);
      //find the variable name used for the component
      const variableNames = match.map((line) => {
        const split = line.split("=");
        const variableName = split[0].replace("const", "").trim();
        console.log(`Variable name: ${variableName}`);
        return variableName;
      });
      console.log(`Variable names: ${variableNames}`);

      const variableNamesArray = Array.from(new Set(variableNames));
      //find the props used in the component and if they are subject to change
      variableNamesArray.forEach((variable) => {
        const regex = new RegExp(`${variable}[.].*?[)]`, "gm");
        const match = fileString.match(regex);
        console.log(`Inner Match: ${match}`);
        if (match !== null) {
          //found relevant props to change
          match.map((line) => {
            const split = line.split(".");
            const prop = split[1].replace(")", "");
            const newProp = reactJsonData.find(
              (field) => field.v2Name === prop
            ).v3Name;
            console.log(`Prop: ${variable}.${prop}`);
            console.log(`New Prop: ${variable}.${newProp}`);
            console.log(
              `File string: ${fileString.includes(`${variable}.${prop}`)}`
            );
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
