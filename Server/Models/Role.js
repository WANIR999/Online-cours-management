const mongoose=require('mongoose')
const roleschema= new mongoose.Schema({
    label:{
        type:String,
        
    },
})
 const Role= mongoose.model('role',roleschema)
module.exports= Role