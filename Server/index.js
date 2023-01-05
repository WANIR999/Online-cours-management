const { urlencoded } = require('express')
const express=require('express')
const app= express()
const config= require('./Config/config')
const dotenv= require('dotenv').config()
const test=require('./Router/test')


app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(test)


app.listen(process.env.PORT,()=>{console.log('connected to server')})