const router=require('express').Router()
const {TryCatch} =require('../Outils/Trycatch')
const {errorHandler}= require('../middelwares/ErrorHandler')
const {creatAssignement,UpdateAssignement,getAssignement,getAssignementes,removeAssignement,ValidityChecker}=require('../Controllers/Assignement')
const {verify,postverif}=require('../middelwares/authVerification')


router.post('/creat',verify(),TryCatch(creatAssignement))
router.get('/getone',verify(),TryCatch(getAssignement))
router.get('/getall',verify(),TryCatch(getAssignementes))
router.post('/update',verify(),TryCatch(UpdateAssignement))
router.post('/remove',verify(),TryCatch(removeAssignement))
router.get('/checkvalidassignement',verify(),ValidityChecker())

router.use(errorHandler)

module.exports= router