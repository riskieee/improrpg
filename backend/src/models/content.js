// main Content class for improRPG

const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const Player = require('./player')

const ContentSchema = new mongoose.Schema({
  addingPlayer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
    autopopulate: true
  },
  contentNode: {
    type: String,
    required: true
  }
})

ContentSchema.plugin(autopopulate)
module.exports = mongoose.model('Content', ContentSchema)
