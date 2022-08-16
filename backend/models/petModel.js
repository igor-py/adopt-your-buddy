const mongoose = require('mongoose')

const petSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Adcione o email do Responsável'],
            unique: true,
            lowercase: true
        },
        position: [],
        breed: {
            type: String,
            default: 'cat',
        },
        pets: {
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
                    type: Buffer,
                },
            ],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Pet', petSchema)
