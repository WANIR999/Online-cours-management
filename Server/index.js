const { urlencoded } = require('express')
const express=require('express')
const app= express()
const config= require('./Config/config')
const dotenv= require('dotenv').config()
const Cours=require('./Router/Cours')
const User=require('./Router/User')
const Role=require('./Router/Role')
const organism=require('./Router/Organism')
const Auth=require('./Router/Auth')
const Assignement=require('./Router/Assignement')
const Historique=require('./Router/Historique')



app.use(express.json())
app.use(urlencoded({extended:true}))
app.use('/cours',Cours)
app.use('/User',User)
app.use('/Role',Role)
app.use('/organism',organism)
app.use('/Auth',Auth)
app.use('/Assignement',Assignement)
app.use('/Historique',Historique)


app.listen(process.env.PORT,()=>{console.log('connected to server')})