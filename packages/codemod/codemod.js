#!/usr/bin/env node
const fs = require("fs").promises;
const path = require("path");

const reactData = require("./changeReact.json");
const htmlData = require("./changes.json");

function readFileLinesToArray(filePath) {
  try {
    const data = require("fs").readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
}

const main = async (path, type = "default") => {
  const files = await searchDirectory(path);
  files.forEach((file) => {
    const linesArray = readFileLinesToArray(file);
    console.log(`File: ${file} ${file.endsWith("test.tsx")}`);
    if (file.endsWith("test.tsx")) {
      const changedFile = regexCompare(linesArray, htmlData, reactData);
      fs.writeFile(file, changedFile, function (err) {
        if (err) return console.log(err);
        console.log("File modified successfully");
      });
    } else {
      const changedComponentFile = regexCompareComponent(
        linesArray,
        htmlData,
        reactData
      );
      fs.writeFile(file, changedComponentFile, function (err) {
        if (err) return console.log(err);
        console.log("File modified successfully");
      });
    }
  });
};

const directoryPath = process.argv[2];
const changeType = process.argv[3];

if (!directoryPath) {
  console.error("Please provide a directory path");
  process.exit(1);
}

main(directoryPath, changeType);
