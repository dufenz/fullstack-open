const express = require('express')
const app = express()

const logger = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const unknownEndpoint = require('./middleware/unknownEndpoint')

app.use(express.json())
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`)
  next()
})

app.get('/test', (req, res) => {
  res.send('OK')
})

app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
