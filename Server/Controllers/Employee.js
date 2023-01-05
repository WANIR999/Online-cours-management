const Employee = require('../Models/Employees')
const bcrypt=require('bcryptjs')



const creatEmployee= async(req,res)=>{
    const {body}=req
    body.comfirmation=true
    body.password=await bcrypt.hash(body.password,10)
    const Employe= await Employee.create({...body})
    if(!Employe) throw Error('employee not added')
    res.json(Employe)
}

module.exports= {creatEmployee}