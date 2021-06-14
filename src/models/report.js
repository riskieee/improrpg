// main Report class for improRPG

const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const Player = require('./player')

const reportSchema = new mongoose.Schema({
  reportedPlayer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
    autopopulate: true
  },
  reportingPlayer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
    autopopulate: true
  },
  toReportTxt: {
    type: String,
    required: true
  }
})

class Report {
  printReport() {
    return {
      reportedPlayer: this.reportedPlayer,
      reportingPlayer: this.reportingPlayer,
      reportTxt: this.reportTxt
    }
  }
}

reportSchema.loadClass(Report)
reportSchema.plugin(autopopulate)
module.exports = mongoose.model('Report', reportSchema)
