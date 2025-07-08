const notesRouter = require('express').Router()
const Note = require('../models/note')
const logger = require('../utils/logger')

notesRouter.get('/', async (req, res) => {
  const notes = await Note.find({})
  res.json(notes)
})

notesRouter.get('/:id', async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id)
    if (note) {
      res.json(note)
    } else {
      res.status(404).end()
    }
  } catch (error) {
    next(error)
  }
})

notesRouter.post('/', async (req, res, next) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false
  })

  try {
    const savedNote = await note.save()
    logger.info('Note saved:', savedNote)
    res.status(201).json(savedNote)
  } catch (error) {
    next(error)
  }
})

notesRouter.delete('/:id', async (req, res, next) => {
  try {
    await Note.findByIdAndRemove(req.params.id)
    logger.info(`Note ${req.params.id} deleted`)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = notesRouter
