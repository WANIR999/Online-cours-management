const mongoose=require('mongoose')
const coursschema= new mongoose.Schema({
    name:{
        type:String,
        
    },
    description:{
        type:String,
        
    },
    image:{
        type:String,   
    },
    Organism:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'organism'
    },
    start:{
        type: Date,
        default: Date.now()
    },
    end:{
        type:Date,
        default: Date.now()+ 7*24*60*60*1000,
    },
})
 const Cours= mongoose.model('cour',coursschema)
module.exports= Cours