const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const PORT = 8080
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const app = express()
const multer = require('multer')

// Connect to database
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     },
// })

// const upload = multer({ storage: storage })

app.use('/api/pets', require('./routes/userRoutes'))

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
    // Set Build Folder as Static
    app.use(express.static(path.join(__dirname, '../src')))

    app.get('*', (req, res) =>
        res.sendFile(__dirname, '../', 'public', 'index.html')
    )
} else {
    console.log('Ambiente de dev')
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
