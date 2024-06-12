const expree = require('express');
const path = require('path');
const app = expree();
// user routes
const {userRouter} = require('./routes/user.js');
const {products , peoples} = require('./data.js');
//Setup static and middleware
// app.use(expree.static('./public'));

// And we have a third party middleware like morgan (npm)


// explain process
const PORT = process.env.PORT || 8000;

app.get('/' , (req , res) => {
    res.send("Home page");
});

app.get('/peoples' , (req , res) => {
    res.status(200).json({
        status : "Success" , 
        data : peoples,
    });
});

app.use('/users' , userRouter);
app.listen(PORT , () => {
    console.log(`Server starting on port ${PORT}`);
});
