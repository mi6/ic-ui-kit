import fs from "fs";
import path from "path";
import ignoreData from "../data/ignoreList.js";
/**
 *
 * @param {*} directoryPath
 * @returns a list of files relevant to the code mod changes from a given directory
 */
export async function searchDirectory(directoryPath) {
  let foundFiles = [];
  async function search(directoryPath) {
    try {
      const files = await fs.promises.readdir(directoryPath);
      for (const file of files) {
        const filePath = path.join(directoryPath, file);
        const stats = await fs.promises.stat(filePath);

        const ignored = ignoreData.reduce((acc, curr) => {
          if (filePath.includes(curr)) {
            return true;
          }
          return acc;
        }, false);

        if (stats.isDirectory() && !ignored) {
          await search(filePath);
        } else if (!ignored) foundFiles.push(filePath);
      }
    } catch (err) {
      console.error(`Error reading directory: ${err.message}`);
    }
  }

  await search(directoryPath);
  return foundFiles;
}
