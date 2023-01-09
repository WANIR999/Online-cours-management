const User = require('../Models/User')
const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')

const login= async(req,res)=>{
    const {body}=req
    const user= await User.findOne({email:body.email})
    if(!user) throw Error('account not found')
    const pass= await bcrypt.compare(body.password,user.password)
    if(!pass) throw Error('password incorrect')
    const token=jwt.sign({user},process.env.SECRET)
    if(!token) throw Error('can not creat the token')
    res.json({msg:'loged in', token:token})
}

module.exports={login}