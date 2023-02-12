const Assignement = require('../Models/Assignement')
const User=require('../Models/User')
const Cours=require('../Models/Cours')
const Historique= require('../Models/Historique')
const ls=require('local-storage')


const creatAssignement= async(req,res)=>{
    const {users,cours}=req.body
for(let i=0;i<users.length;i++){
        let body={user:users[i],cours:cours} 
       const oldAssignementrows= await Assignement.findOne({user:body.user}).count('_id')
       const oldAssignement= await Assignement.findOne({user:body.user}).populate({path:'user',model:User}).populate({path:'cours',model:Cours})
       const newAssignementCours= await Cours.findOne({_id:cours})
          if(oldAssignementrows<2) { 
               if(!oldAssignement) await Assignement.create({...body}) 
                 if(oldAssignement)
                 {
                     if((oldAssignement.cours.start.getTime()<newAssignementCours.start.getTime() && oldAssignement.cours.end.getTime()<newAssignementCours.start.getTime()) || (oldAssignement.cours.start.getTime()>newAssignementCours.end.getTime() && oldAssignement.cours.end.getTime()>newAssignementCours.end.getTime())){
                         await Assignement.create({...body})
                        }else{
                          RemoveAssignedRowsByUser(users,cours)
                          return res.json({errmsg:`${oldAssignement.user.name} a dejas une formation dans cet intervale de temp`}) 
                         }
                 }}
          else{
        RemoveAssignedRowsByUser(users,cours)
        return res.json({errmsg: `${oldAssignement.user.name} a dejas deux formations a valider`})
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
           if(assignement) {
            if(assignement.cours.end.getTime()<Date.now()){
               await Historique.create({user:assignement.user._id,cours:assignement.cours._id})
               await Assignement.findOneAndRemove({user:assignement.user._id,cours:assignement.cours._id})
            }

        }
      })
      res.json({msg:'saved'})
}

const getAssignementes= async(req,res)=>{
    const {body}=req
    const Assignementes= await Assignement.find().populate({path:'user',model:User}).populate({path:'cours',model:Cours})
    if(!Assignementes) throw Error('Assignement not found')
    res.json(Assignementes)
}
const getAssignement= async(req,res)=>{
    const {id}=req.body
    const oneAssignement= await Assignement.findOne({user:id}).populate({path:'cours',model:Cours})
    if(!oneAssignement) throw Error('assignement not found')
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