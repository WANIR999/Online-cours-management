const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatUser,UpdateUser,getUser,getUsers,removeUser}=require('../Controllers/User')
const Upload = require('../middelwares/Upload')


router.post('/creat',Upload.single('image'),trycatch(creatUser))
router.get('/getone',trycatch(getUser))
router.get('/getall',trycatch(getUsers))
router.post('/update',Upload.single('image'),trycatch(UpdateUser))
router.post('/remove',trycatch(removeUser))

router.use(errorHandler)

module.exports= router