const mongoose = require('mongoose')
const validator = require('validator')

const petSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Adcione o email do Responsável'],
            unique: true,
            lowercase: true,
            validate: (value) => {
                return validator.isEmail(value)
            },
        },
        position: [],
        breed: {
            type: String,
            default: 'cat',
        },
        pets: [
            {
                phone: {
                    type: Number,
                    required: [true, 'Adcione o celular do Responsável'],
                },
                pettype: {
                    type: String,
                    required: true,
                    default: 'cat',
                },
                description: String,
                name: {
                    type: String,
                    required: true,
                },
                age: Number,
                isMonth: {
                    type: Boolean,
                    default: true,
                },
                lstOfImg: [
                    {
                        type: String,
                    },
                ],
            },
        ],
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Pet', petSchema)
