const fs = require('fs');
const path = require('path');

const accessorDirectories = [
  path.resolve(__dirname, '../src/directives'),
  path.resolve(__dirname, '../standalone/src/directives')
];

const patches = [
  {
    fileName: 'text-value-accessor.ts',
    before: 'handleChangeEvent($event.target?.["value"])',
    after: 'handleChangeEvent($any($event).detail.value)'
  },
  {
    fileName: 'select-value-accessor.ts',
    before: 'handleChangeEvent($event.target?.["value"])',
    after: 'handleChangeEvent($any($event).detail.value)'
  },
  {
    fileName: 'radio-value-accessor.ts',
    before: 'handleChangeEvent($event.target?.["value"])',
    after: 'handleChangeEvent($any($event).detail.value)'
  },
  {
    fileName: 'boolean-value-accessor.ts',
    before: 'handleChangeEvent($event.target?.["checked"])',
    after: 'handleChangeEvent($any($event.target).checked)'
  }
];

for (const directory of accessorDirectories) {
  for (const patch of patches) {
    const filePath = path.join(directory, patch.fileName);

    if (!fs.existsSync(filePath)) {
      throw new Error(`Generated accessor was not found: ${filePath}`);
    }

    const contents = fs.readFileSync(filePath, 'utf8');
    const occurrences = contents.split(patch.before).length - 1;

    if (occurrences === 0) {
      if (contents.includes(patch.after)) {
        continue;
      }

      throw new Error(`Expected generated expression was not found: ${filePath}`);
    }

    const patchedContents = contents.split(patch.before).join(patch.after);
    fs.writeFileSync(filePath, patchedContents);
  }
}