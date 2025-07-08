require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const notesRouter = require('./controllers/notes')
const errorHandler = require('./models/controllers/errorHandler')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/notes', notesRouter)
app.use(errorHandler)

module.exports = app

