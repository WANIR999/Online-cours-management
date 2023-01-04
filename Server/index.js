const { urlencoded } = require('express')
const express=require('express')
const app= express()
const config= require('./Config/config')
const dotenv= require('dotenv').config()


app.use(express.json())
app.use(urlencoded({extended:true}))


app.listen(process.env.PORT,()=>{console.log('connected to server')})