const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const Admin=require('../Models/Admin')
const {sendMail}= require('../Outils/Mailer')


router.get('/aa',trycatch())

router.use(errorHandler)

module.exports= router