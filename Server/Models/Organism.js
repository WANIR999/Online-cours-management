const mongoose=require('mongoose')
const Organismschema= new mongoose.Schema({
    name:{
        type:String,    
    }
})
 const Organism= mongoose.model('Organism',Organismschema)
module.exports= Organism