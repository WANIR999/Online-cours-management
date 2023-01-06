const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatGroup,UpdateGroup,getGroup,getGroupes,removeGroup}=require('../Controllers/Group')
const Upload = require('../middelwares/Upload')


router.post('/creat',trycatch(creatGroup))
router.get('/getone',trycatch(getGroup))
router.get('/getall',trycatch(getGroupes))
router.post('/update',trycatch(UpdateGroup))
router.post('/remove',trycatch(removeGroup))

router.use(errorHandler)

module.exports= router