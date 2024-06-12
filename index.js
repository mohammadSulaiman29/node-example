const express = require('express');
const path = require('path');
const app = express();
// user routes
const { userRouter } = require('./routes/user.js');
const { products, peoples } = require('./data.js');

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

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).json({
            success: true,
            msg: "Hello",
        })
    }
    res.status(200).json({
        success: true,
        data: [...peoples, name],
    })
});

app.put('/edit/user/:id', (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const person = peoples.find((person) => person.id === Number(id));
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person for id ${id}` });
    }
    const newPeople = peoples.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res
        .status(200)
        .json({ success: true, data: newPeople });
});

app.delete('/delete/user/:id', (req, res) => {
    const { id } = req.params;
    const person = peoples.find((person) => person.id === Number(id));
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person for id ${id}` });
    };
    const newPeople = peoples.filter((person) => {
        return person.id !== Number(id);
    });
    res
        .status(200)
        .json({ success: true, data: newPeople });
});

app.use('/users', userRouter);
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});
