require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const blogsRouter = require('./routes/blogs')

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB error:', err.message))

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))
