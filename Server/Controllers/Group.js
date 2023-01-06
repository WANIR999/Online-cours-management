const Group = require('../Models/Group')
const bcrypt=require('bcryptjs')



const creatGroup= async(req,res)=>{
    const {body}=req
    const newGroup= await Group.create({...body})
    if(!newGroup) throw Error('Group not added')
    res.json(newGroup)
}
const getGroupes= async(req,res)=>{
    const {body}=req
    const Groupes= await Group.find()
    if(!Groupes) throw Error('Group not found')
    res.json(Groupes)
}
const getGroup= async(req,res)=>{
    const {body}=req
    const oneGroup= await Group.findOne({_id:body._id})
    if(!oneGroup) throw Error('admin not added')
    res.json(oneGroup)
}
const UpdateGroup= async(req,res)=>{
    const {body}=req
    const oldGroup= await Group.finOne({_id:body._id})
    oldGroup.name=body.name
    oldGroup.Employees=body.Employees
    oldGroup.save()
    if(!oldGroup) throw Error('Group not updated')
    res.json(oldGroup)
}
const removeGroup= async(req,res)=>{
    const {body}=req
    const removedGroup= await Group.findOneAndRemove({_id:body.id})
    if(!removedGroup) throw Error('Group not removed')
    res.json(removedGroup)
}

module.exports= {creatGroup,removeGroup,getGroupes,getGroup,UpdateGroup}