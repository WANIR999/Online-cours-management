const mongoose=require('mongoose')
const adminschema= new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
      
    },
    password:{
        type:String,
       
    },
    confirmation:{
        type:Boolean,
        default:false
    }
})
 const Admin= mongoose.model('admin',adminschema)
module.exports= Admin