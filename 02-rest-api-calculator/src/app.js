const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/sum", (req, res) => { 
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    res.json({
        operation: "addition",
        result: a + b
    });
});

app.get("/api/subtract", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    res.json({
        operation: "subtraction",
        result: a - b
    });
});

app.get("/api/multiply", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    res.json({
        operation: "multiplication",
        result: a * b
    });
});

app.get("/api/divide", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }
    if (b === 0) {
        return res.status(400).json({ error: "Division by zero" });
    }
    res.json({
        operation: "division",
        result: a / b
    });
});

app.listen(port, () => { console.log("Server is running...") });