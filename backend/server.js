require('dotenv').config();
const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');


// Creates an Express application. The express() 
// function is a top-level function exported by the express module.
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
// Cross-Origin Resource Sharing
app.use(cors());
app.use(express.json());



const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open',()=>{console.log('bubble tea has connect to the remote database')})


// Routes
// const restaurantsRouter = require('./routes/restaurants.js');
const storeRouter = require('./routes/restaurants.js');


// now to use the routes, so when ever someone goes to the root url and goes to /restaurants or users its 
// going to load everything in either the exercisesRouter you get everthing in that route ,same goes 
// for the  user route 
app.use('/stores',storeRouter);
// app.use('/restaurants',restaurantsRouter);


app.listen(port,()=> {
    console.log(`server is up and running on port :${port}`);
});