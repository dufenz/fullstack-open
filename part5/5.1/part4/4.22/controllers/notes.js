const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', async (req, res) => {
  const notes = await Note.find({})
  res.json(notes)
})

notesRouter.post('/', async (req, res, next) => {
  const { content, important } = req.body

  if (!content) {
    return res.status(400).json({ error: 'content missing' })
  }

  const note = new Note({ content, important: important || false })

  try {
    const savedNote = await note.save()
    res.status(201).json(savedNote)
  } catch (error) {
    next(error)
  }
})

module.exports = notesRouter
