const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

// GET /api/notes
app.get('/api/notes', (req, res) => {
  res.json(notes)
})

// POST /api/notes
app.post('/api/notes', (req, res) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({ error: 'content missing' })
  }

  const note = {
    id: notes.length + 1,
    content: body.content,
    important: body.important || false
  }

  notes.push(note)
  res.status(201).json(note)
})

app.get('/', (req, res) => {
  res.send('✅ Server is running!')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
