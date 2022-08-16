const asyncHandler = require('express-async-handler')
const Pet = require('../models/petModel')

// @desc Register a new pet
// @route /api/save-pets
// @access public
const registerPet = asyncHandler(async (req, res) => {
    const { email, pets } = req.body
    console.log('Entrou para registrar ', req.body)
    console.log('Pets ', pets)

    if (!email) {
        throw new Error('Não preencheu o email!!')
    }

    const responsibleExist = await Pet.findOne({ email })

    if (responsibleExist) {
        // const result = await Pet.updateOne(
        //     {
        //         email,
        //     },
        //     req.body
        // )
        // if (result.upsertedCount === 0) {
        //     res.status(400)
        //     throw new Error('Update falhou')
        // }
        res.status(400)
        console.log('Responsável já existe')
        throw new Error('Update falhou')
    } else {
        console.log('Vindo Else ')
        const pet = await Pet.create(req.body)

        if (pet) {
            res.status(201).json({
                _id: pet._id,
                email: pet.email,
            })
        }
    }
})

module.exports = {
    registerPet,
}
