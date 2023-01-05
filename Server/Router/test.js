const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const Admin=require('../Models/Cours')
const upload= require('../middelwares/Upload')


router.post('/aa',upload.single('image'),trycatch(async(req,res)=>{
    const {body}=req;
    body.image=req.file.filename
    const data= await Admin.create({...body})
    res.json(data)
}))

router.use(errorHandler)

module.exports= router