// Imported libraries
const express =require('express');
require('dotenv').config();
const app=express(); // Creating an App with Express
const port=8000;
const routes = require('./routes');
const db=require('./config/mongoose');
// routes
app.use('/',routes);
app.use(express.urlencoded()); //Enable us to pass data through URL

app.listen(port,(err)=>{
    if(err){

        console.log('errr',err)
    };
    console.log('Server is running on port :',port);
});