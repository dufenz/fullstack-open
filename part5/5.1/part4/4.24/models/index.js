const express = require('express')
const cors = require('cors')
require('dotenv').config()

const notesRouter = require('./controllers/notes')
const connectToDatabase = require('./utils/mongo')

const app = express()

connectToDatabase()

app.use(cors())
app.use(express.json())
app.use('/api/notes', notesRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
})
