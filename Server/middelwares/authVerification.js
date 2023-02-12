const jwt=require('jsonwebtoken')
const dotenv=require('dotenv').config()
const localstorage = require('local-storage');


function verify(access){
  return (req,res,next)=>{
    if(localstorage('token')){
       if(jwt.verify(localstorage('token'),process.env.SECRET)){
        const token=jwt.verify(localstorage('token'),process.env.SECRET)
            req.user=token     
            // if(access.includes(token.user.role.label)){
                next()
            // }else{
            //   res.json({errmsg:'anauthorised',statu:401})
            // }
       }else{
        res.json({errmsg:'anauthenticated',statu:402})
       }   
    
     }else{
      res.json({errmsg:'anauthenticated',statu:402})
       }   
  }
}
function postverif(){
  return (req,res,next)=>{
    if(localstorage('token')) throw Error('you are loged in!!')
    next()
}

}


module.exports= {verify,postverif}