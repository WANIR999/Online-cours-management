const Employee = require('../Models/Employees')
const bcrypt=require('bcryptjs')



const creatEmployee= async(req,res)=>{
    const {body}=req
    body.image=req.file.filename
    const newEmployee= await Employee.create({...body})
    if(!newEmployee) throw Error('Employee not added')
    res.json(newEmployee)
}
const getEmployees= async(req,res)=>{
    const {body}=req
    const Employeees= await Employee.find()
    if(!Employeees) throw Error('Employee not found')
    res.json(Employeees)
}
const getEmployee= async(req,res)=>{
    const {body}=req
    const oneEmployee= await Employee.findOne({_id:body._id})
    if(!oneEmployee) throw Error('Employee not found')
    res.json(oneEmployee)
}
const UpdateEmployee= async(req,res)=>{
    const {body}=req
    const oldEmployee= await Employee.finOne({_id:body._id})
    oldEmployee.name=body.name
    oldEmployee.email=body.email
    oldEmployee.password=body.password
    oldEmployee.Organism=body.Organism
    oldEmployee.Confirmation=body.Confirmation
    oldEmployee.save()
    if(!oldEmployee) throw Error('Employee not updated')
    res.json(oldEmployee)
}
const removeEmployee= async(req,res)=>{
    const {body}=req
    const removedEmployee= await Employee.findOneAndRemove({_id:body.id})
    if(!removedEmployee) throw Error('Employee not removed')
    res.json(removedEmployee)
}

module.exports= {creatEmployee,removeEmployee,getEmployees,getEmployee,UpdateEmployee}