const mongoose=require('mongoose')
const Groupschema= new mongoose.Schema({
    name:{
        type:String,
        
    },
    employees:{
        type:String,
      
    },
    Organism:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'organism'
    }
})
 const Group= mongoose.model('group',Groupschema)
module.exports= Group