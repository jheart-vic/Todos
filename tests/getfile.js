import path from 'path'
import fs from 'fs'

const getFileContent = (fileName) => {
    const html_path = path.join(__dirname, fileName);
    return fs.readFileSync(html_path);
}

export default getFileContent;