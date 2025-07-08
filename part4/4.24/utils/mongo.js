const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

const connectToDatabase = async () => {
  try {
    await mongoose.connect(connectionString)
    console.log('✅ Connected to MongoDB')
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message)
  }
}

module.exports = connectToDatabase
