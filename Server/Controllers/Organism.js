const Organism = require('../Models/Organism')
const bcrypt=require('bcryptjs')



const creatOrganism= async(req,res)=>{
    const {body}=req
    const newOrganism= await Organism.create({...body})
    if(!newOrganism) throw Error('organism not added')
    res.json(newOrganism)
}

module.exports= {creatOrganism}