const router=require('express').Router()
const {TryCatch}=require('../Outils/TryCatch')
const {errorHandler}= require('../middelwares/ErrorHandler')
const {creatCours,UpdateCours,getCours,getCourses,removeCours}=require('../Controllers/Cours')
const Upload = require('../middelwares/Upload')
const {verify,postverif}=require('../middelwares/authVerification')


router.post('/creat',verify(),Upload.single('image'),TryCatch(creatCours))
router.get('/getone',verify(),TryCatch(getCours))
router.get('/getall',verify(),TryCatch(getCourses))
router.post('/update',verify(),Upload.single('image'),TryCatch(UpdateCours))
router.post('/remove',verify(),TryCatch(removeCours))

router.use(errorHandler)

module.exports= router