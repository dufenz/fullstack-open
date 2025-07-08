require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const notesRouter = require('./controllers/notes')
const errorHandler = require('./middleware/errorHandler')
const Note = require('./models/note')

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB')

    // Удаляем заметки с content === 'test'
    return Note.deleteMany({ content: 'test' })
  })
  .then(result => {
    console.log(`🧹 Removed ${result.deletedCount} test notes`)

    app.listen(process.env.PORT || 3001, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 3001}`)
    })
  })
  .catch(err => {
    console.error('❌ Error connecting to MongoDB or deleting test notes:', err.message)
  })

app.use('/api/notes', notesRouter)
app.use(errorHandler)
