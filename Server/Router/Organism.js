const router=require('express').Router()
const {TryCatch}=require('../Outils/TryCatch')
const {errorHandler}= require('../middelwares/ErrorHandler')
const {creatOrganism,UpdateOrganism,getOrganism,getOrganismes,removeOrganism}=require('../Controllers/Organism')
const Upload = require('../middelwares/Upload')
const {verify,postverif}=require('../middelwares/authVerification')


router.post('/creat',verify(),TryCatch(creatOrganism))
router.get('/getone',verify(),TryCatch(getOrganism))
router.get('/getall',verify(),TryCatch(getOrganismes))
router.post('/update',verify(),TryCatch(UpdateOrganism))
router.post('/remove',verify(),TryCatch(removeOrganism))

router.use(errorHandler)

module.exports= router