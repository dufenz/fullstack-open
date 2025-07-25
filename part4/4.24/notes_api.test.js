const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

test('notes are returned as JSON', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
