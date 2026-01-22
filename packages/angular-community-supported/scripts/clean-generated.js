const path = require('path');

const { glob } = require('glob');
const fs = require('fs-extra');

const distDir = path.join(__dirname, '../dist');

const distGeneratedNodeModules = path.join(distDir, 'node_modules');

const testGeneratedFiles = path.join(distDir, 'test');

function doGlob(globString) {
  return new Promise((resolve, reject) => {
    glob(globString, (err, matches) => {
      if (err) return reject(err);
      resolve(matches);
    })
  });
}

function getDeletionReferencesForCodeGeneratedFiles() {
  const ngFactoryGlob = path.join(distDir, '**', '*ngfactory*');
  const ngSummaryGlob = path.join(distDir, '**', '*ngsummary*');
  const promises = [];
  promises.push(doGlob(ngFactoryGlob));
  promises.push(doGlob(ngSummaryGlob));
  return Promise.all(promises).then(listOfGlobResults => {
    const deleteFilePromises = [];
    listOfGlobResults.forEach(fileMatches => {
      fileMatches.forEach(filePath => {
        deleteFilePromises.push(fs.remove(filePath));
      })
    })
    return Promise.all(deleteFilePromises);
  });
}

Promise.all([
  getDeletionReferencesForCodeGeneratedFiles(),
  fs.remove(distGeneratedNodeModules),
  fs.remove(testGeneratedFiles)
]);