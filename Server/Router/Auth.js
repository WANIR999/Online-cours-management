const router=require('express').Router()
const {TryCatch}=require('../Outils/Trycatch')
const {errorHandler}= require('../middelwares/ErrorHandler')
const {login}=require('../Controllers/Auth')
const {verify,postverif}=require('../middelwares/authVerification')


router.post('/login',postverif(),TryCatch(login))

router.use(errorHandler)

module.exports= router