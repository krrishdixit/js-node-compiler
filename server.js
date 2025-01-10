const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON data

// POST endpoint to run the code
app.post("/run", (req, res) => {
    const { code } = req.body; // Code received from frontend

    try {
        // Simple code execution (Replace this with a safer execution method for production)
        let result = eval(code); // Avoid using eval in real applications for security reasons
        res.json({ output: result });
    } catch (err) {
        res.json({ error: err.message });
    }
});

// Define the port for the server to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
