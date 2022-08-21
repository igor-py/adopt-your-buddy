const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 8080
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const app = express()

// Connect to database
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/pets', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
