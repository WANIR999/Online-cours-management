const router=require('express').Router()
const {TryCatch}=require('../Outils/TryCatch')
const {errorHandler}= require('../middelwares/ErrorHandler')
const {creatUser,UpdateUser,getUser,getUsers,removeUser}=require('../Controllers/User')
const Upload = require('../middelwares/Upload')
const {verify,postverif}=require('../middelwares/authVerification')


router.post('/creat',Upload.single('image'),TryCatch(creatUser))
router.get('/getone',verify(),TryCatch(getUser))
router.get('/getall',verify(),TryCatch(getUsers))
router.post('/update',verify(),Upload.single('image'),TryCatch(UpdateUser))
router.post('/remove',verify(),TryCatch(removeUser))

router.use(errorHandler)

module.exports= router