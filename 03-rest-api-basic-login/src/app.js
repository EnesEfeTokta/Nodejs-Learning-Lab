const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
    { id: 1, username: "EnesEfe", password: "12345" },
    { id: 2, username: "AlfaCengiz", password: "54321" },
    { id: 3, username: "Ayşe", password: "67890" }
];

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        return res.status(200).send("Login successful");
    } else {
        return res.status(401).send("Invalid username or password");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});