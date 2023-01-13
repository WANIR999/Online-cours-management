const mongoose=require('mongoose')
const assignementschema= new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    cours:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'cours',
    }
})
 const Assignement= mongoose.model('assignement',assignementschema)
module.exports= Assignement