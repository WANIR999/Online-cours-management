const Role = require('../Models/Role')
const bcrypt=require('bcryptjs')



const creatRole= async(req,res)=>{
    const {body}=req
    const newRole= await Role.create({...body})
    if(!newRole) throw Error('Role not added')
    res.json(newRole)
}
const getRolees= async(req,res)=>{
    const {body}=req
    const Rolees= await Role.find()
    if(!Rolees) throw Error('Role not found')
    res.json(Rolees)
}
const getRole= async(req,res)=>{
    const {body}=req
    const oneRole= await Role.findOne({_id:body._id})
    if(!oneRole) throw Error('admin not added')
    res.json(oneRole)
}
const UpdateRole= async(req,res)=>{
    const {body}=req
    const oldRole= await Role.finOne({_id:body._id})
    oldRole.label=body.label
    oldRole.save()
    if(!oldRole) throw Error('Role not updated')
    res.json(oldRole)
}
const removeRole= async(req,res)=>{
    const {body}=req
    const removedRole= await Role.findOneAndRemove({_id:body.id})
    if(!removedRole) throw Error('Role not removed')
    res.json(removedRole)
}

module.exports= {creatRole,removeRole,getRolees,getRole,UpdateRole}