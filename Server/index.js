const { urlencoded } = require('express')
const express=require('express')
const app= express()
const config= require('./Config/config')
const dotenv= require('dotenv').config()
const Cours=require('./Router/Cours')
const admin=require('./Router/Admin')
const employee=require('./Router/Employee')
const organism=require('./Router/Organism')
const group=require('./Router/Group')



app.use(express.json())
app.use(urlencoded({extended:true}))
app.use('/cours',Cours)
app.use('/admin',admin)
app.use('/employee',employee)
app.use('/group',group)
app.use('/organism',organism)


app.listen(process.env.PORT,()=>{console.log('connected to server')})