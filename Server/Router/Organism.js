const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatOrganism}=require('../Controllers/Organism')
const Upload = require('../middelwares/Upload')


router.post('/creat',Upload.single('image'),trycatch(creatOrganism))

router.use(errorHandler)

module.exports= router