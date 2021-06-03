// main Story class for improRPG
const colors = require('colors');

class Player {
  _playerId = null

  _lastActive = 'yesterday'

  _reports = []

  constructor(newName, newPreference) {
    this._playerName = newName;
    this._preferences = [newPreference] || [''];
  }

  get playerInfo() {
    return `
### ${colors.bgBlue.black(' Player INFO ')}
----------------------------------------------
      Name/Login   ${this._playerName.red}
      Preference:  ${this._preferences.join(' ').rainbow} ⛺
      Last active: ${this._lastActive}
      Reports:  ${this._reports.length} ${this._reports.map((report) => report.reportTxt)}
    `;
  }

  get playerName() { return this._playerName; }

  set playerName(newName) {
    if (newName) { this._playerName = newName; }
  }

  get preferences() { return this._preferences; }

  // get singlePreference() { return this._preferences.map(preferencItem => preferencItem) }
  set preference(newPreference) { this._preferences.push(newPreference); }

  get lastActive() {
    return this._lastActive ? this._lastActive : 'never';
  }

  // NOT ACTIVE YET
  // set lastActive(newActive) {
  //   newActive ? this._lastActive = newActive
  //     : function () { throw new Error('_playerName is not valid. Try another, please.'); };
  // }

  // method player join story
  joinStory(newStory) {
    newStory.participants.push(this._playerName);
  }

  addContent(currentStory, contentNode) {
    currentStory._contents.push(contentNode);
    currentStory.joinStory(this.playerName);
  }

  addReport(reportedPlayer, toReportTxt) {
    reportedPlayer._reports.push({ reportTxt: toReportTxt, reporter: this._playerName });
  }

  get reportInfo() {
    return `
### ${colors.bgBlue.black(' Report INFO ')}
----------------------------------------------
      Name/Login   ${this._playerName.red}
      Reports (${this._reports.length}) : ${this._reports.map((report) => `${report.reportTxt}reporter: ${report.reporter}`)}
    `;
  }

}

module.exports = Player;
