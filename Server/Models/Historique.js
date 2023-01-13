const mongoose=require('mongoose')
const historiqueschema= new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    cours:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'cours',
    },
})
 const Historique= mongoose.model('historique',historiqueschema)
module.exports= Historique