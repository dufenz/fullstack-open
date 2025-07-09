const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const loginRouter = require('./routes/login')
const userRouter = require('./routes/users')
const blogRouter = require('./routes/blogs')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err))

app.use('/api/login', loginRouter)
app.use('/api/users', userRouter)
app.use('/api/blogs', blogRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
