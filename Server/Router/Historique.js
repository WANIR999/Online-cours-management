const router=require('express').Router()
const {TryCatch}=require('../Outils/TryCatch')
const {errorHandler}= require('../middelwares/ErrorHandler')
const {creatHistorique,getHistorique,getHistoriques}=require('../Controllers/Historique')
const Upload = require('../middelwares/Upload')
const {verify,postverif}=require('../middelwares/authVerification')


router.get('/getone',verify(),TryCatch(getHistorique))
router.get('/getall',verify(),TryCatch(getHistoriques))

router.use(errorHandler)

module.exports= router