const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Note = require('../models/note')

const api = supertest(app)

beforeEach(async () => {
  await Note.deleteMany({})
  const note = new Note({ content: 'Тестовая заметка', important: true })
  await note.save()
})

test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('a valid note can be added', async () => {
  const newNote = { content: 'Another test note', important: false }

  await api
    .post('/api/notes')
    .send(newNote)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/notes')
  expect(response.body).toHaveLength(2)
})

afterAll(async () => {
  await mongoose.connection.close()
})
