const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const upload= require('../middelwares/Upload')
const {creatCours}=require('../Controllers/Cours')
const Upload = require('../middelwares/Upload')


router.post('/aa',Upload.single('image'),trycatch(creatCours))

router.use(errorHandler)

module.exports= router