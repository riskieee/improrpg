// main Content class for improRPG

const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const ContentSchema = new mongoose.Schema({
  addingPlayer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
    autopopulate: { maxDepth: 2 }
  },
  contentNode: {
    type: String
  },
  photoFilename: {
    type: String
  },
  photoDescription: {
    type: String
  }
})

ContentSchema.plugin(autopopulate)
module.exports = mongoose.model('Content', ContentSchema)
