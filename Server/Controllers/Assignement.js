const Assignement = require('../Models/Assignement')
const User=require('../Models/User')
const Cours=require('../Models/Cours')
const Historique= require('../Models/Historique')
const ls=require('local-storage')


const creatAssignement= async(req,res)=>{
   const arr={users:["63bed9952daa0a2cd91bae02","63c0d9d3aac7a477db8a539c"],cours:"63bf2f32831337ee4b6e8f97"}
for(let i=0;i<arr.users.length;i++){
        let body={user:arr.users[i],cours:arr.cours,statu:arr.status} 
       const oldAssignementrows= await Assignement.findOne({user:body.user}).count('_id')
       const oldAssignement= await Assignement.findOne({user:body.user}).populate({path:'user',model:User}).populate({path:'cours',model:Cours})
       const newAssignementCours= await Cours.findOne({_id:arr.cours})
          if(oldAssignementrows<2) { 
               if(!oldAssignement) await Assignement.create({...body}) 
                 if(oldAssignement)
                 {
                     if((oldAssignement.cours.start.getTime()<newAssignementCours.start.getTime() && oldAssignement.cours.end.getTime()<newAssignementCours.start.getTime()) || (oldAssignement.cours.start.getTime()>newAssignementCours.end.getTime() && oldAssignement.cours.end.getTime()>newAssignementCours.end.getTime())){
                         await Assignement.create({...body})
                        }else{
                          RemoveAssignedRowsByUser(arr.users,arr.cours)
                          return res.json({errmsg:`${oldAssignement.user.name} a dejas une formation dans cet intervale de temp`, assigned_to:done}) 
                         }
                 }}
          else{
        RemoveAssignedRowsByUser(arr.users,arr.cours)
        return res.json({errmsg: `${oldAssignement.user.name} a dejas deux formations a valider`,assigned_to:done})
             }
    }
    res.json({msg:'assigne'})
}

const RemoveAssignedRowsByUser= async (users,cours)=>{
    users.forEach(async (a)=>{
        await Assignement.findOneAndRemove({user:a,cours:cours})
      })
}

const ValidityChecker= ()=>async (req,res)=>{
    const assignements= await Assignement.find()
    assignements.forEach(async (a)=>{
        const assignement= await Assignement.findOne({_id:a._id}).populate({path:'cours',model:Cours})
            if(assignement.cours.end.getTime()<Date.now()){
                const saved= await Historique.create({user:assignement.user._id,cours:assignement.cours._id})
                const removed= await Assignement.findOneAndRemove({user:assignement.user._id,cours:assignement.cours._id})
            }
      })
      res.json({msg:'saved'})
}

const getAssignementes= async(req,res)=>{
    const {body}=req
    const Assignementes= await Assignement.find()
    if(!Assignementes) throw Error('Assignement not found')
    res.json(Assignementes)
}
const getAssignement= async(req,res)=>{
    const {body}=req
    const oneAssignement= await Assignement.findOne({_id:body._id})
    if(!oneAssignement) throw Error('admin not added')
    res.json(oneAssignement)
}
const UpdateAssignement= async(req,res)=>{
    const {body}=req
    const oldAssignement= await Assignement.finOne({_id:body._id})
    oldAssignement.user=body.user
    oldAssignement.cours=body.cours
    oldAssignement.statu=body.statu
    oldAssignement.save()
    if(!oldAssignement) throw Error('Assignement not updated')
    res.json(oldAssignement)
}
const removeAssignement= async(req,res)=>{
    const {body}=req
    const removedAssignement= await Assignement.findOneAndRemove({_id:body.id})
    if(!removedAssignement) throw Error('Assignement not removed')
    res.json(removedAssignement)
}

module.exports= {creatAssignement,removeAssignement,getAssignementes,getAssignement,UpdateAssignement,ValidityChecker}