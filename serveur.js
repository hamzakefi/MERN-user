const express=require("express")

//create instance
const app=express()

// reauire env and config
require("dotenv").config();

// midddleware bodyparser
app.use(express.json())

//connect our DB
const connectDb = require("./Config/connectDb")

connectDb();
app.use('/api/contact',require('../Mern/Routes/contact'))
app.use('/api/user' , require('../Mern/Routes/user') )


// create port
const PORT= process.env.PORT

// create server
app.listen(PORT,error => {
    error ? console.error(` Fail to connect ,${error}`) :
    console.log(`server is running on port ${PORT}`)

}) 