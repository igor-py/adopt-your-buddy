const asyncHandler = require('express-async-handler')
const Pet = require('../models/petModel')

// @desc Register a new pet
// @route /api/save-pets
// @access public
const registerPet = asyncHandler(async (req, res) => {
    const { email, pets } = req.body

    if (!email) {
        throw new Error('Não preencheu o email!!')
    }

    const responsibleExist = await Pet.findOne({ email })

    if (responsibleExist) {
        const copyArray = responsibleExist.pets
        copyArray.push(pets)
        let newBreed = responsibleExist.breed

        if (responsibleExist.breed != 'both') {
            copyArray.forEach((pet) => {
                if (pet.pettype != responsibleExist.breed) {
                    newBreed = 'both'
                }
            })
        }

        const updateReturn = await Pet.updateOne(
            { _id: responsibleExist._id },
            {
                pets: copyArray,
                breed: newBreed,
            }
        )

        if (updateReturn.modifiedCount == 1) {
            res.status(201).json({
                message: 'Atualizado com sucesso',
            })
        }
    } else {
        const pet = await Pet.create(req.body)

        if (pet) {
            res.status(201).json({
                _id: pet._id,
                email: pet.email,
                message: 'Criado com sucesso',
            })
        }
    }
})

module.exports = {
    registerPet,
}
