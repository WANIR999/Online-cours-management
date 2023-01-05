const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatEmployee}=require('../Controllers/Employee')
const Upload = require('../middelwares/Upload')


router.post('/creat',Upload.single('image'),trycatch(creatEmployee))

router.use(errorHandler)

module.exports= router