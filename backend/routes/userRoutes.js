const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controllers/userController')
const { registerPet } = require('../controllers/petController')

router.post('/', loginUser)
router.post('/register', registerPet)

module.exports = router
