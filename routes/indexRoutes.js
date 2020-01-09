const router = require('express').Router()
const userController = require('../controllers/userController')
// const authentic = require('../midleware/authentication')
// const autorize = require('../midleware/authorization')
// const {deleteCode} = process.env


router.get('/user/all',  userController.getAllUser)
router.post('/register',  userController.register)
 



module.exports = router