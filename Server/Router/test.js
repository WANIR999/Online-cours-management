const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')


router.get('/aa',trycatch((req,res)=>{throw Error('error hdi')}))

router.use(errorHandler)

module.exports= router