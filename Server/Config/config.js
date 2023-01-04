const mongoose= require('mongoose')
const dotenv=require('dotenv').config()

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://rooter:passroot@cluster0.2zh4kjw.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true }).then(()=>console.log('connected to db')).catch(()=>console.log('not connected to db'))

module.exports=mongoose