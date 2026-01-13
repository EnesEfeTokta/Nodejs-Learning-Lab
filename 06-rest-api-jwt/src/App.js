const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET_KEY = '123456789qwertyuiopasdfghjklzxcvbnm';
const PORT = 3000;

const user = {
    id: 1,
    username: 'testuser',
    email: 'testuser@example.com',
    password: '123456',
    role: 'admin'
}

const token = jwt.sign(user, SECRET_KEY,
    {
        expiresIn: '1h', algorithm: 'HS256'
    }
)

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === user.username && password === user.password) {
        res.json({ token });
    }
    else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.get('/api/profile', authenticateToken, (req, res) => {
    res.json({ message: 'Profile data', user: req.user });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});