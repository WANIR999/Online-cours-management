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

module.exports= {creatAdmin}