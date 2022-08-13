const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register a new user
// @route /api/pets
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email } = req.body

    if (!name || !email) {
        throw new Error('Please include all fields')
    }

    // Find if user already exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exist')
    }

    const user = await User.create({
        name,
        email,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Login a user
// @route /api/pets/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    res.send('Login Route')
})

module.exports = {
    registerUser,
    loginUser,
}
