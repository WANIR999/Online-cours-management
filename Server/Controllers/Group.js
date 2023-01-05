const Group = require('../Models/Group')



const creatGroup= async(req,res)=>{
    const {body}=req
    const newGroup= await Group.create({...body})
    if(!newGroup) throw Error('group not added')
    res.json(newGroup)
}

module.exports= {creatGroup}