const express = require('express');
require('dotenv').config();

const sportRouter = require('./routes/sports');

const connectDB = require('./db/db');
connectDB();

require('./model/index');

const app = express();

const PORT = process.env.PORT || 3555;

/******** MIDDLEWARE **********/

app.use(express.json())
app.use(express.urlencoded({extended: true}))

/******** ROUTES **********/

app.use('/api/sports',sportRouter);

app.get('/', (req, res) => {
    res.send('<h1>I am Olympics API</h1>');
});

app.listen(PORT, (error) =>{
    if(error){
        console.log(`Error ${error}`);
    }
    console.log(`listening on port ${PORT}`)
});

