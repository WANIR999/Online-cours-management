const Cours = require('../Models/Cours')
const bcrypt=require('bcryptjs')



const creatCours= async(req,res)=>{
    const {body}=req
    body.image=req.file.filename
    const newCours= await Cours.create({...body})
    if(!newCours) throw Error('cours not added')
    res.json(newCours)
}
const getCourses= async(req,res)=>{
    const Courses= await Cours.find()
    if(!Courses) throw Error('cours not found')
    res.json(Courses)
}
const getCours= async(req,res)=>{
    const {body}=req
    const oneCours= await Cours.findOne({_id:body._id})
    if(!oneCours) throw Error('cours not found')
    res.json(oneCours)
}
const getCoursbyEmployee= async(req,res)=>{
    const {body}=req
    const oneCours= await Cours.findOne({_id:body._id})
    if(!oneCours) throw Error('cours not found')
    res.json(oneCours)
}
const UpdateCours= async(req,res)=>{
    const {body}=req
    const oldCours= await Cours.finOne({_id:body._id})
    oldCours.name=body.name
    oldCours.description=body.description
    oldCours.Organism=body.Organism
    oldCours.group=body.group
    oldCours.image=body.image
    oldCours.save()
    if(!oldCours) throw Error('cours not updated')
    res.json(oldCours)
}
const removeCours= async(req,res)=>{
    const {body}=req
    const removedCours= await Cours.findOneAndRemove({_id:body.id})
    if(!removedCours) throw Error('cours not removed')
    res.json(removedCours)
}

module.exports= {creatCours,removeCours,getCourses,getCours,UpdateCours}