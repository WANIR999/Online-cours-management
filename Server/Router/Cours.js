const router=require('express').Router()
const trycatch=require('../Outils/Trycatch')
const errorHandler= require('../middelwares/ErrorHandler')
const {creatCours,UpdateCours,getCours,getCourses,removeCours}=require('../Controllers/Cours')
const Upload = require('../middelwares/Upload')


router.post('/creat',Upload.single('image'),trycatch(creatCours))
router.get('/getone',trycatch(getCours))
router.get('/getall',trycatch(getCourses))
router.post('/update',Upload.single('image'),trycatch(UpdateCours))
router.post('/remove',trycatch(removeCours))

router.use(errorHandler)

module.exports= router