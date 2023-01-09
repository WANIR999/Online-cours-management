const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatRole,UpdateRole,getRole,getRolees,removeRole}=require('../Controllers/Role')
const Upload = require('../middelwares/Upload')


router.post('/creat',trycatch(creatRole))
router.get('/getone',trycatch(getRole))
router.get('/getall',trycatch(getRolees))
router.post('/update',trycatch(UpdateRole))
router.post('/remove',trycatch(removeRole))

router.use(errorHandler)

module.exports= router