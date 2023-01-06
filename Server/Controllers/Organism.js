const Organism = require('../Models/Organism')
const bcrypt=require('bcryptjs')



const creatOrganism= async(req,res)=>{
    const {body}=req
    const newOrganism= await Organism.create({...body})
    if(!newOrganism) throw Error('Organism not added')
    res.json(newOrganism)
}
const getOrganismes= async(req,res)=>{
    const {body}=req
    const Organismes= await Organism.find()
    if(!Organismes) throw Error('Organism not found')
    res.json(Organismes)
}
const getOrganism= async(req,res)=>{
    const {body}=req
    const oneOrganism= await Organism.findOne({_id:body._id})
    if(!oneOrganism) throw Error('admin not added')
    res.json(oneOrganism)
}
const UpdateOrganism= async(req,res)=>{
    const {body}=req
    const oldOrganism= await Organism.finOne({_id:body._id})
    oldOrganism.name=body.name
    oldOrganism.save()
    if(!oldOrganism) throw Error('Organism not updated')
    res.json(oldOrganism)
}
const removeOrganism= async(req,res)=>{
    const {body}=req
    const removedOrganism= await Organism.findOneAndRemove({_id:body.id})
    if(!removedOrganism) throw Error('Organism not removed')
    res.json(removedOrganism)
}

module.exports= {creatOrganism,removeOrganism,getOrganismes,getOrganism,UpdateOrganism}