const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const config = require('./utils/config')
const logger = require('./utils/logger')
const notesRouter = require('./controllers/notes')
const errorHandler = require('./middleware/errorHandler')

mongoose.set('strictQuery', false)
mongoose.connect(config.MONGODB_URI)
  .then(() => logger.info('connected to MongoDB'))
  .catch(err => logger.error('error connecting to MongoDB:', err.message))

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/notes', notesRouter)
app.use(errorHandler)

module.exports = app
