// main Story class for improRPG

const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

// const Content = require('./content')

const storySchema = new mongoose.Schema({
  storyName: {
    type: String,
    unique: true,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  storyTheme: [
    {
      type: String,
      minlength: 2,
      maxlength: 50
    }
  ],
  storyCover: {
    type: String,
    minlength: 4,
    maxlength: 50
  },
  contentNodes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content',
      autopopulate: true
    }
  ],
  lastEdit: {
    type: Date,
    default: Date.now
  }
})

class Story {
  get printStory() {
    return {
      storyName: this.storyName,
      storyTheme: this.storyTheme,
      storyCover: this.storyCover,
      storyPlayer: this.storyPlayer,
      storyLength: this.contentNodes.length,
      contentNodes: this.contentNodes,
      lastEdit: this.lastEdit
    }
  }

  get storyPlayer() {
    return 'ToDo to implementent' // get addingPlayer from storyNode
  }
}

storySchema.loadClass(Story)
storySchema.plugin(autopopulate)

module.exports = mongoose.model('Story', storySchema)
