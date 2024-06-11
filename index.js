const expree = require('express');
const path = require('path');
const app = expree();
// user routes
const {userRouter} = require('./routes/user.js');

// explain process
const PORT = process.env.PORT || 8000;

app.get('/' , (req , res) => {
    res.send("Home page");
});

app.use('/users' , userRouter);
app.listen(PORT , () => {
    console.log(`Server starting on port ${PORT}`);
});
