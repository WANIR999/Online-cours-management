const mongoose=require('mongoose')
const Userschema= new mongoose.Schema({
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
    image:{
        type:String,
        default:null,
    },
    role:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'role',
        default:'63b7e1acfd7e3378a469aee5'
    },
    Organism:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'organism',
        default:null
    }
})
 const User= mongoose.model('user',Userschema)
module.exports= User