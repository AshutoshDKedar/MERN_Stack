const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port  = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connectig to mongodb

const uri = process.env.DATABASE_URI;
mongoose.connect(uri, { useNewUrlParser : true, useCreateIndex : true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB Database is connected successfully');
}, err =>{
    console.log('Error', err);
});


const exerciseRouter = require('./routes/exercise-routes');
const userRouter = require('./routes/user-routes');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});