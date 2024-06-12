const express = require('express');
const path = require('path');
const app = express();
// user routes
const { userRouter } = require('./routes/user.js');
const {productRouter} = require('./routes/product.js');

app.use(express.static('./methods-public'));
//Setup static and middleware
// app.use(expree.static('./public'));

// And we have a third party middleware like morgan (npm)

// this parser middleware to handle the JSON data (important)
app.use(express.json());
// parse form data 
app.use(express.urlencoded({ extended: false }));
// explain process
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Home page");
});

app.get('/peoples', (req, res) => {
    res.status(200).json({
        status: "Success",
        data: peoples,
    });
});

app.post('/login', (req, res) => {
    for (let people of peoples) {
        if (req.body.name === people.name) {
            return res.status(200).json({
                status: "passed",
            })
        } else {
            return res.status(401).json(
                {
                    status: "failed"
                }
            )
        }
    }
});



app.use('/users', userRouter);
app.use('/products' , productRouter);
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});
