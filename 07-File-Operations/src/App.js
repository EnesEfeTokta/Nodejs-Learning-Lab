const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'textfile.txt');

async function fileOperations() {
    console.log('Starting file operations...');

    try {
        await fs.writeFile(filePath, 'Hello, My name is Enes Efe Tokta', 'utf8');
        console.log('File written successfully.');

        const readedData = await fs.readFile(filePath, 'utf8');
        console.log('File read successfully:', readedData);

        await fs.appendFile(filePath, '\nI am learning Node.js file operations.', 'utf8');
        console.log('Data appended successfully.');
        const updatedData = await fs.readFile(filePath, 'utf8');
        console.log('Updated file content:', updatedData);

        const newFilePath = path.join(__dirname, 'textfile_renamed.txt');
        await fs.rename(filePath, newFilePath);
        console.log('File renamed successfully.');
        const renamedData = await fs.readFile(newFilePath, 'utf8');
        console.log('Renamed file content:', renamedData);

        await fs.unlink(newFilePath);
        console.log('File deleted successfully.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fileOperations();