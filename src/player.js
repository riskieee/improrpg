// main Story class for improRPG
const colors = require('colors')

class Player {
  _playerId = null;
  _lastActive = 'yesterday';
  _complaints = [];
  constructor(newName, newPreference) {
    this._playerName = newName;
    this._preferences = [newPreference] || [''];
  }

  get playerInfo() {
    return `
### ${colors.bgBlue.black(' Player INFO ')}
----------------------------------------------
      Name/Login   ${this._playerName.red}
      Preference:  ${this._preferences.map(item => ' ' + item).rainbow} ⛺
      Last active: ${this._lastActive}
      Complaints:  ${this._complaints.length} ${this._complaints.map((complain) => complain)}
    `;
  }

  get playerName() { return this._playerName; }

  set playerName(newName) {
    if (newName) { this._playerName = newName }
  }

  get preferences() { return this._preferences }
  //get singlePreference() { return this._preferences.map(preferencItem => preferencItem) }
  set preference(newPreference) { this._preferences.push(newPreference); }

  get lastActive() {
    return this._lastActive ? this._lastActive : 'never';
  }

  set lastActive(newActive) {
    newActive ? this._lastActive = newActive :
      function () { throw new Error(`_playerName is not valid. Try another, please.`) };
  }

  // get complaints() { this._complaints.map(complainItem => complainItem + ' '); }
  // set complaints(newComplaint) { this._complaints.push(newComplaint); }

  // method player join story
  joinStory(newStory) {
    newStory.participants.push(this._playerName)
  }

  addContent(currentStory, contentNode) {
    currentStory._contents.push(contentNode)
    currentStory.joinStory(this.playerName)
  }

}

module.exports = Player;
