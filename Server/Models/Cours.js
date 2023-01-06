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
    group:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'group'
    },
})
 const Cours= mongoose.model('cour',coursschema)
module.exports= Cours