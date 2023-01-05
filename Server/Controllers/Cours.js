const Cours = require('../Models/Cours')
const bcrypt=require('bcryptjs')



const creatCours= async(req,res)=>{
    const {body}=req
    body.image=req.file.filename
    const newCours= await Cours.create({...body})
    if(!newCours) throw Error('admin not added')
    res.json(newCours)
}

module.exports= {creatCours}