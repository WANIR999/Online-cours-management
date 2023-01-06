const mongoose=require('mongoose')
const Groupschema= new mongoose.Schema({
    name:{
        type:String,
        
    },
    employees:{
        type:String, 
    },
})
 const Group= mongoose.model('group',Groupschema)
module.exports= Group