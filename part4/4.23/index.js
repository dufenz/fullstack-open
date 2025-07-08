require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB')
    app.listen(3001, () => {
      console.log('✅ Server running on port 3001')
    })
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message)
  })
