const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatAdmin,UpdateAdmin,getAdmin,getAdmins,removeAdmin}=require('../Controllers/Admin')
const Upload = require('../middelwares/Upload')


router.post('/creat',Upload.single('image'),trycatch(creatAdmin))
router.get('/getone',Upload.single('image'),trycatch(getAdmin))
router.get('/getall',Upload.single('image'),trycatch(getAdmins))
router.post('/update',Upload.single('image'),trycatch(UpdateAdmin))
router.post('/remove',Upload.single('image'),trycatch(removeAdmin))

router.use(errorHandler)

module.exports= router