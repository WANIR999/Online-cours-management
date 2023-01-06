const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatEmployee,UpdateEmployee,getEmployee,getEmployees,removeEmployee}=require('../Controllers/Employee')
const Upload = require('../middelwares/Upload')


router.post('/creat',Upload.single('image'),trycatch(creatEmployee))
router.get('/getone',trycatch(getEmployee))
router.get('/getall',trycatch(getEmployees))
router.post('/update',Upload.single('image'),trycatch(UpdateEmployee))
router.post('/remove',trycatch(removeEmployee))

router.use(errorHandler)

module.exports= router