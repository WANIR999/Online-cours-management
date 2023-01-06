const Admin = require('../Models/Admin')
const bcrypt=require('bcryptjs')



const creatAdmin= async(req,res)=>{
    const {body}=req
    body.comfirmation=true
    body.password=await bcrypt.hash(body.password,10)
    const admin= await Admin.create({...body})
    if(!admin) throw Error('admin not added')
    res.json(admin)
}
const getAdmin= async(req,res)=>{
    const {body}=req
    const admin= await Admin.create({_id:body.id})
    if(!admin) throw Error('admin not added')
    res.json(admin)
}
const UpdateAdmin= async(req,res)=>{
    const {body}=req
    const admin= await Admin.create({_id:body.id})
    admin.name=body.name
    admin.email=body.email
    admin.password=body.password
    admin.save()
    if(!admin) throw Error('admin not added')
    res.json(admin)
}
const removeAdmin= async(req,res)=>{
    const {body}=req
    const admin= await Admin.findOneAndRemove({_id:body.id})
    if(!admin) throw Error('admin not added')
    res.json(admin)
}
const getAdmins= async(req,res)=>{
    const admin= await Admin.find()
    if(!admin) throw Error('admin not added')
    res.json(admin)
}

module.exports= {creatAdmin,removeAdmin,getAdmins,getAdmin,UpdateAdmin}