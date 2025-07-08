const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')

const config = require('./utils/config')
const notesRouter = require('./controllers/notes')
const logger = require('./utils/logger')

const app = express()

mongoose.set('strictQuery', false)
mongoose.connect(config.MONGODB_URI)
  .then(() => logger.info('Connected to MongoDB'))
  .catch(error => logger.error('MongoDB error:', error.message))

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/notes', notesRouter)

module.exports = app
