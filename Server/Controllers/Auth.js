const User = require('../Models/User')
const Role=require('../Models/Role')
const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')
const ls=require('local-storage')

const login= async(req,res)=>{
    const {body}=req
    const user= await User.findOne({email:body.email}).populate({path:'role',model:Role})
    if(!user) throw Error('account not found')
    const pass= await bcrypt.compare(body.password,user.password)
    if(!pass) throw Error('password incorrect')
    const token=jwt.sign({user},process.env.SECRET)
    ls('token',token)
    if(!token) throw Error('can not creat the token')
    res.json({msg:'loged in', token:token})
}
const logout= async(req,res)=>{
   
    res.json({msg:'loged out'})
}

module.exports={login,logout}