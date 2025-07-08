const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  important: Boolean
})

module.exports = mongoose.model('Note', noteSchema)
