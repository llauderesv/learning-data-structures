const fs = require('fs');
const path = require('path');

function findDir(dir) {
  // Check if the current path is a directory
  if (fs.statSync(dir).isDirectory()) {
    console.log(`Directory: ${dir}`);

    // Read the contents of the directory
    const files = fs.readdirSync(dir);
    console.log(files)

    for (const file of files) {
      const fullPath = path.join(dir, file);
      findDir(fullPath); // Recursive call
    }
  } else {
    console.log(`File: ${dir}`);
  }
}

findDir('../../exercises');
