const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {login}=require('../Controllers/Auth')


router.post('/login',trycatch(login))

router.use(errorHandler)

module.exports= router