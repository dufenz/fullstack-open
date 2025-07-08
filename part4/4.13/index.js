require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const notesRouter = require('./controllers/notes')
const errorHandler = require('./middleware/errorHandler')
const unknownEndpoint = require('./middleware/unknownEndpoint')
const logger = require('./utils/logger')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => logger.info('connected to MongoDB'))
  .catch(error => logger.error('error connecting to MongoDB:', error.message))

app.use('/api/notes', notesRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(process.env.PORT || 3001, () => {
  logger.info(`Server running on port ${process.env.PORT || 3001}`)
})
