const router=require('express').Router()
const {TryCatch}=require('../Outils/Trycatch')
const {errorHandler}= require('../middelwares/ErrorHandler')
const {login,encrpttoken,decrpttoken,logout}=require('../Controllers/Auth')
const {verify,postverif}=require('../middelwares/authVerification')


router.post('/login',postverif(),TryCatch(login))
router.get('/logout',verify(),TryCatch(logout))
router.post('/decrypt',TryCatch(decrpttoken))
router.post('/encrypt',TryCatch(encrpttoken))

router.use(errorHandler)

module.exports= router