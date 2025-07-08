require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch(error => console.error('error connecting to MongoDB:', error.message))

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minLength: [3, 'Name must be at least 3 characters'],
  },
  number: {
    type: String,
    required: [true, 'Number is required'],
    minLength: [8, 'Number must be at least 8 characters'],
  },
})

personSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
  },
})

module.exports = mongoose.model('Person', personSchema)
