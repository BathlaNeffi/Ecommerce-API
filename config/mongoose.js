// Creating a database to store products
const mongoose = require('mongoose');
// Connecting the database
mongoose.connect(`mongodb://localhost:27017/ecommerce_dev`);
const db=mongoose.connection;
// on unsuccessfull connection
db.on('error', console.error.bind(console,'Error in connecting to the MongoDB'));
//on succesfull connection
db.once('open',function(){
    console.log('Connected to the Database :: Mongo DB ');
})

module.exports=db;