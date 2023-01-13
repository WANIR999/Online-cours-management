const Historique = require('../Models/Historique')
const bcrypt=require('bcryptjs')



const creatHistorique= async(req,res)=>{
    const {body}=req
    const newHistorique= await Historique.create({...body})
    if(!newHistorique) throw Error('Historique not added')
    res.json(newHistorique)
}
const getHistoriques= async(req,res)=>{
    const Historiques= await Historique.find()
    if(!Historiques) throw Error('Historique not found')
    res.json(Historiques)
}
const getHistorique= async(req,res)=>{
    const {body}=req
    const oneHistorique= await Historique.findOne({_id:body._id})
    if(!oneHistorique) throw Error('Historique not found')
    res.json(oneHistorique)
}
const getHistoriquebyEmployee= async(req,res)=>{
    const {body}=req
    const oneHistorique= await Historique.findOne({user:body._id})
    if(!oneHistorique) throw Error('Historique not found')
    res.json(oneHistorique)
}

module.exports= {creatHistorique,getHistoriques,getHistorique}