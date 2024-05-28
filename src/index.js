const { appendFile } = require("fs");
const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  await fs.appendFile(fileName, fileContent);
  
};
updateFile(fileName, "Is a online platform");
module.exports = updateFile;
