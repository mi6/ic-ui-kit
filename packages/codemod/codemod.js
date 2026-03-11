#!/usr/bin/env node
import fs from "fs";
import yargs from "yargs";
import { searchDirectory } from "./sections/directory-search.js";
import { convertComponents } from "./sections/component-changes.js";
import { simpleTestComparison } from "./sections/simple-test-comparison.js";

/**
 *
 * @param {*} filePath
 * @returns list of files in the directory as strings
 *
 */
function readFileLinesToArray(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
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
    const linesArray = readFileLinesToArray(file);
    /**
     * if file contains .spec or .test, run simple test comparison
     */
    if (test && (file.includes(".spec.") || file.includes(".test."))) {
      const changedFile = simpleTestComparison(linesArray);
      if (changedFile !== linesArray) {
        fs.writeFile(file, changedFile, (err) => {
          if (err) return console.log(err);
          console.log(`${file.split("\\").slice(-1)} modified successfully`);
        });
      }
    } else {
      /**
       * run file conversion for all other files
       */
      const changedComponentFile = convertComponents(linesArray);
      if (changedComponentFile !== linesArray) {
        fs.writeFile(file, String(changedComponentFile), (err) => {
          if (err) return console.log(err);
          console.log(`${file.split("\\").slice(-1)} modified successfully`);
        });
      }
    }
  });
};

const cli = yargs(process.argv.slice(2));
cli
  .usage("Usage: node ./$0 [options]")
  .example("node ./$0 --dir ./src", "execute codemod in src directory")
  .option("dir", {
    alias: "d",
    describe: "Directory to migrate",
    nargs: 1,
    demandOption: "Directory to migrate required",
    type: "string",
  })
  .option("test", {
    alias: "t",
    describe: "Run codemod on directory provided, if false, skip migration",
    type: "boolean",
    default: false,
  })
  .help("h")
  .alias("h", "help")
  .alias("v", "version")
  .epilog("Created by ICDS ♥")
  .parse();

const { dir, test } = cli.argv;

if (!dir) {
  console.error("Please provide a directory path to the codemod");
  process.exit(1);
}

await main(dir, test);
