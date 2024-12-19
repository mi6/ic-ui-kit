#!/usr/bin/env node
import fs from "fs";
import { searchDirectory } from "./sections/directory-search.js";
import { compareComponent } from "./sections/component-changes.js";
import { simpleTestComparison } from "./sections/simple-test-comparison.js";
import * as reactData from "./changeReact.json" with {type: "json"};
import * as htmlData from "./changes.json" with {type: "json"};

/**
 * 
 * @param {*} filePath 
 * @returns list of files in the directory as strings
 * 
 */
 function readFileLinesToArray(filePath) {
  try {
    const data =  fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
}


/**
 * 
 * @param {*} path 
 * @param {*} type 
 * 
 * main function for code mod, will convert v2 file format to v3 file format
 */
const main = async (path, test = false) => {
  
  const files = await searchDirectory(path);
  files.forEach((file) => {
    const linesArray =  readFileLinesToArray(file);
    const isReact = file.includes('.tsx') || file.includes('.jsx');
    if(test && (file.includes('.spec.') || file.includes('.test.'))){
      const changedFile = simpleTestComparison(
        linesArray,
        [...htmlData['default'], ...reactData['default']]
      );
      if(changedFile !== linesArray){
      fs.writeFile(file, changedFile, (err) => {
        if (err) return console.log(err);
        console.log(`${file.split('\\').slice(-1)} modified successfully`);
      });
    }
    }
    if (file.includes(`.cy.`)) {
      const changedFile = compareComponent(
        linesArray,
        htmlData['default']
      );
      if(changedFile !== linesArray){
      fs.writeFile(file, changedFile, (err) => {
        if (err) return console.log(err);
        console.log(`${file.split('\\').slice(-1)} modified successfully`);
      });
    }
    } else {
      const changedComponentFile = compareComponent(
        linesArray,
       isReact ? reactData['default'] : htmlData['default']
      );
      if(changedComponentFile !== linesArray){
      fs.writeFile(file, String(changedComponentFile), (err) => {
        if (err) return console.log(err);
        console.log(`${file.split('\\').slice(-1)} modified successfully`);
      });
    }
    }
  }
);
};

const directoryPath = process.argv[2];
const testing = process.argv[3];

if (!directoryPath) {
  console.error("Please provide a directory path");
  process.exitCode = 1;
}

await main(directoryPath, testing);
