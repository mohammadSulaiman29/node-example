const expree = require('express');
const path = require('path');
// const db = require('./config/database');

const app = expree();
const PORT = process.env.PORT || 8000;

app.get('/' , (req , res) => {
    res.send("Home page");
});

app.listen(PORT , () => {
    console.log(`Server starting on port ${PORT}`);
});
