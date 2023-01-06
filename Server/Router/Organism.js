const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatOrganism,UpdateOrganism,getOrganism,getOrganismes,removeOrganism}=require('../Controllers/Organism')
const Upload = require('../middelwares/Upload')


router.post('/creat',trycatch(creatOrganism))
router.get('/getone',trycatch(getOrganism))
router.get('/getall',trycatch(getOrganismes))
router.post('/update',trycatch(UpdateOrganism))
router.post('/remove',trycatch(removeOrganism))

router.use(errorHandler)

module.exports= router