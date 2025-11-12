const fs = require('fs-extra');
const path = require('path');
const spawn = require('child_process').spawn;

const typescriptPath = path.join(__dirname, '..', 'node_modules', '.bin');
const parentDirectory = path.join(__dirname, '..');
const parentSrcDir = path.join(parentDirectory, 'src');
const parentDistDir = path.join(parentDirectory, 'dist');

function copyCSS() {
  const cssFiles = ['core.css','normalize.css'];

  for (const cssFile of cssFiles) {
    const src = path.join(parentDirectory, '..', 'web-components', 'dist', 'core', cssFile);
    const dst = path.join(parentDistDir, 'css', cssFile);

    fs.removeSync(dst);
    fs.copySync(src, dst);
  }
}

function buildSchematics(){
  return new Promise((resolve, reject) => {
    const cmd = 'tsc';
    const args = [
      '--project',
      path.join(parentDirectory, 'tsconfig.schematics.json'),
    ];

    const p = spawn(cmd, args, { cwd: typescriptPath, stdio: 'inherit', shell: true });
    p.on('close', (code) => {
      if (code > 0) {
        console.log(`ng-add build exited with ${code}`);
        reject();
      } else {
        resolve();
      }
    });
  });
}

function copySchematicsJson(){
  const src = path.join(parentSrcDir, 'schematics', 'collection.json');
  const fileSrc = path.join(parentSrcDir, 'schematics', 'add', 'files');
  const dst = path.join(parentDistDir,'schematics', 'collection.json');
  const fileDst = path.join(parentDistDir, 'schematics', 'add', 'files');
  const schemaSrc = path.join(parentSrcDir, 'schematics', 'add', 'schema.json');
  const schemaDst = path.join(parentDistDir, 'schematics', 'add', 'schema.json');

  fs.removeSync(dst);
  fs.removeSync(fileDst);
  fs.copySync(src, dst);
  fs.copySync(fileSrc,fileDst);
  fs.copySync(schemaSrc, schemaDst);

}

copyCSS();
buildSchematics();
copySchematicsJson();