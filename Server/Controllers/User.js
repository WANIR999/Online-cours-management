const User = require('../Models/User')
const bcrypt=require('bcryptjs')
const {sendMail}= require('../Outils/Mailer')



const creatUser= async(req,res)=>{
    const {body}=req
    const password=body.password
    body.image=req.file.filename
    body.password= await bcrypt.hash(body.password,10)
    const newUser= await User.create({...body})
    if(!newUser) throw Error('User not added')
    const subject='creation de votre compte'
    const msg1= `salut ${newUser.name} un admin vous invite au plateforme des formation, vos identifient sont <br> Email: ${newUser.email} <br> Password: ${password} ` 
    const msg2= `rejoindre maintenant` 
    const url= `www.google.com` 
     sendMail(newUser.email,subject,msg1,msg2 ,url )
    res.json(newUser)
}
const getUsers= async(req,res)=>{
    const {body}=req
    const Useres= await User.find()
    if(!Useres) throw Error('User not found')
    res.json(Useres)
}
const getUser= async(req,res)=>{
    const {body}=req
    const oneUser= await User.findOne({_id:body._id})
    if(!oneUser) throw Error('User not found')
    res.json(oneUser)
}
const UpdateUser= async(req,res)=>{
    const {body}=req
    const oldUser= await User.finOne({_id:body._id})
    oldUser.name=body.name
    oldUser.email=body.email
    oldUser.password=await bcrypt.hash(body.password,10)
    oldUser.Organism=body.Organism
    oldUser.Confirmation=body.Confirmation
    oldUser.save()
    if(!oldUser) throw Error('User not updated')
    const subject='creation de votre compte'
    const msg1= `salut ${oldUser.name} votre compte a été modifié avec succee` 
    const msg2= `rejoindre votre profile` 
    const url= `www.google.com` 
     sendMail(oldUser.email,subject,msg1,msg2 ,url )
    res.json(oldUser)
}
const removeUser= async(req,res)=>{
    const {body}=req
    const removedUser= await User.findOneAndRemove({_id:body.id})
    if(!removedUser) throw Error('User not removed')
    res.json(removedUser)
}

module.exports= {creatUser,removeUser,getUsers,getUser,UpdateUser}