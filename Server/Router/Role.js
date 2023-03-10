const router=require('express').Router()
const {TryCatch}=require('../Outils/TryCatch')
const {errorHandler}= require('../middelwares/ErrorHandler')
const {creatRole,UpdateRole,getRole,getRolees,removeRole}=require('../Controllers/Role')
const Upload = require('../middelwares/Upload')
const {verify,postverif}=require('../middelwares/authVerification')


router.post('/creat',verify(),TryCatch(creatRole))
router.post('/remove',verify(),TryCatch(removeRole))

router.use(errorHandler)

module.exports= router