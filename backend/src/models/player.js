// main Story class for improRPG
const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')

// const Content = require('./content')
const Report = require('./report')
// const Timestamp = require('./timestamp')

const playerSchema = new mongoose.Schema({
  playerName: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  playerPhoto: {
    type: String,
    minlength: 4,
    maxlength: 50
  },
  playerPreferences: [
    {
      type: String,
      minlength: 4,
      maxlength: 50
    }
  ],
  playerReports: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Report',
      autopopulate: true
    }
  ],
  playerCreated: {
    type: Date,
    default: Date.now
  },
  playerLastActive: {
    type: Date,
    default: Date.now
  }
})

class Player {
  playerInfo() {
    return {
      playerName: this.playerName,
      playerPhoto: this.playerPhoto,
      playerPreferences: this.playerPreferences,
      playerReportsLength: this.playerReports.length,
      playerReports: this.playerReports,
      playerLastActive: this.playerLastActive
    }
  }

  async joinStory(storyToJoin) {
    storyToJoin.participants.push(this)
    this.playerLastActive = Date.now
    await storyToJoin.save()
  }

  async addContent(currentStory, toAddContentNode) {
    currentStory.contentNodes.push(toAddContentNode)
    this.playerLastActive = Date.now
    await currentStory.save()
    return currentStory
  }

  async addReport(reportedPlayer, reportingPlayer, toReportTxt) {
    const newReport = await Report.create(reportingPlayer, this, toReportTxt)
    reportedPlayer.playerReports(newReport)
    await reportedPlayer.save()
  }
}
playerSchema.loadClass(Player)
playerSchema.plugin(autopopulate)
playerSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
})

module.exports = mongoose.model('Player', playerSchema)
