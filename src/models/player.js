// main Story class for improRPG
const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const Content = require('./content')
const Report = require('./report')
// const Timestamp = require('./timestamp')

const playerSchema = new mongoose.Schema({
  playerName: {
    type: String,
    // unique: true,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  playerMail: {
    type: String,
    minlength: 6,
    maxlength: 40,
    unique: true
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
  playerLastActive: {
    type: Date,
    default: Date.now
  }
})

class Player {
  playerInfo() {
    return {
      playerName: this.playerName,
      playerMail: this.playerMail,
      playerPhoto: this.playerPhoto,
      playerPreferences: this.playerPreferences,
      playerReportsLength: this.playerReports.length,
      playerReports: this.playerReports,
      playerLastActive: this.playerLastActive
    }
  }

  async joinStory(storyToJoin) {
    storyToJoin.participants.push(this)
    await storyToJoin.save()
  }

  async addContent(currentStory, toAddContentNode) {
    currentStory.contentNodes.push(toAddContentNode)
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

module.exports = mongoose.model('Player', playerSchema)
