const fs = require('fs').promises;
const express = require('express');

const filePath = './src/users.json';

const app = express();
app.use(express.json());

async function readJSONFile() {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    }
    catch (error) {
        console.error('File read error:', error.message);
        return []; 
    }
}

async function writeJSONFile(content) {
    try {
        const jsonData = JSON.stringify(content, null, 2);
        await fs.writeFile(filePath, jsonData, 'utf-8');
    }
    catch (error) {
        console.error('File write error:', error);
    }
}

app.post('/add', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const users = await readJSONFile();

    if (users.find(user => user.username === username)) {
        return res.status(409).json({ error: 'Username already exists' });
    }

    const newUser = { username, password };
    users.push(newUser);

    await writeJSONFile(users);

    res.status(201).json({ message: 'User added successfully', user: newUser });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});