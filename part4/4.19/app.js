const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const config = require('./utils/config')
const notesRouter = require('./controllers/notes')
const errorHandler = require('./middleware/errorHandler')

mongoose.set('strictQuery', false)
mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch(err => console.error('error connecting to MongoDB:', err.message))

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/notes', notesRouter)
app.use(errorHandler)

module.exports = app
