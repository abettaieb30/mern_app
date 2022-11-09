const express =require('express')
const app= require('express') ()
require ('dotenv').config()
app.use(express.json());

//connecting to database
const connectDB=require('./Helpers/connectDB')
connectDB()

///routes

app.use('/api/v1/users/',require('./Routes/userRoutes'));

app.use('/api/v1/posts/',require('./Routes/postRoutes'));




app.listen(process.env.PORT,(err)=>err? console.log(err):console.log('server is running on port:',process.env.PORT))