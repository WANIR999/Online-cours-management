const mongoose=require('mongoose')
const employeeschema= new mongoose.Schema({
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
    },
    Organism:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'organism'
    }
})
 const Employee= mongoose.model('employee',employeeschema)
module.exports= Employee