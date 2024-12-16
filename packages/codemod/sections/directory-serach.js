export async function searchDirectory(directoryPath) {
  let foundFiles = [];

  async function search(directoryPath) {
    //console.log(`Reading directory: ${directoryPath}`);
    try {
      const files = await fs.readdir(directoryPath);
      for (const file of files) {
        const filePath = path.join(directoryPath, file);
        // console.log(`Reading file or directory: ${filePath}`);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) {
          await search(filePath); // Recursively search subdirectories
        } else if (file.endsWith(".tsx") || file.endsWith(".html")) {
          console.log(filePath);
          foundFiles.push(filePath);
        }
      }
    } catch (err) {
      console.error(`Error reading directory: ${err.message}`);
    }
  }

  await search(directoryPath);
  return foundFiles;
}
