// server.js

const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static('public'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
