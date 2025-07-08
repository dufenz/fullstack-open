const express = require('express')
const notesRouter = express.Router()

const notes = [
  {
    id: 1,
    content: 'Note 1',
    important: true,
  },
  {
    id: 2,
    content: 'Note 2',
    important: false,
  },
]

notesRouter.get('/', (req, res) => {
  res.json(notes)
})

module.exports = notesRouter
