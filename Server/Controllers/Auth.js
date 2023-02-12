const User = require('../Models/User')
const Organism=require('../Models/Organism')
const Role=require('../Models/Role')
const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')
const ls=require('local-storage')

const login= async(req,res)=>{
    const {body}=req
    const user= await User.findOne({email:body.email}).populate({path:'role',model:Role}).populate({path:'organism', model:Organism})
    if(!user) throw Error('account not found')
    const pass= await bcrypt.compare(body.password,user.password)
    if(!pass) throw Error('password incorrect')
    const token=jwt.sign({user},process.env.SECRET)
    ls('token',token)
    if(!token) throw Error('can not creat the token')
    res.json({msg:'loged in', token:token})
}
const logout= async(req,res)=>{
    ls.clear()
    res.json({msg:'loged out'})
}
const decrpttoken= async (req,res)=>{
    const {token}=req.body
    const tokn=jwt.verify(token,process.env.SECRET)
    req.data=tokn
    res.json({data:req.data})
 }
 
 const encrpttoken= async (req,res)=>{
    const {data}=req.body
    const token=jwt.sign({data},process.env.SECRET)
    res.json({token:token})
 }
module.exports={login,logout,decrpttoken,encrpttoken}