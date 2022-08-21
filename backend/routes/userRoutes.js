const express = require('express')
const router = express.Router()
const {
    registerPet,
    getPets,
    getPetById,
} = require('../controllers/petController')

router.post('/', getPets)
router.post('/register', registerPet)
router.post('/pet', getPetById)

module.exports = router
