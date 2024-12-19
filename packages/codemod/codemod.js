#!/usr/bin/env node
const fs = require("fs").promises;
const path = require("path");
const { searchDirectory } = require("./sections/directory-search");
const { testComparison } = require("./sections/test-comparison");
const { compareComponent } = require("./sections/component-changes");

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
    console.log(`File: ${file}`);
    if (file.endsWith("/test.[a-z]*/gm") || file.endsWith("/spec.[a-z]*/gm")) {
      const changedFile = testComparison(
        linesArray,
        type === "react" ? reactData : htmlData
      );
      fs.writeFile(file, changedFile, (err) => {
        if (err) return console.log(err);
        console.log("File modified successfully");
      });
    } else {
      const changedComponentFile = compareComponent(
        linesArray,
        type === "react" ? reactData : htmlData
      );
      fs.writeFile(file, changedComponentFile, (err) => {
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
