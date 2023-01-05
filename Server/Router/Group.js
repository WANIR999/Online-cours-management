const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatGroup}=require('../Controllers/Group')


router.post('/creat',trycatch(creatGroup))

router.use(errorHandler)

module.exports= router