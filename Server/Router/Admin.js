const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatAdmin}=require('../Controllers/Admin')
const Upload = require('../middelwares/Upload')


router.post('/creat',Upload.single('image'),trycatch(creatAdmin))

router.use(errorHandler)

module.exports= router