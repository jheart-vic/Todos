import path from 'path';
import fs from 'fs';

const getFileContent = (fileName) => {
  const htmlPath = path.join(__dirname, fileName);
  return fs.readFileSync(htmlPath);
};

export default getFileContent;