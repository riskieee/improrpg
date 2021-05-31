// main Story class for improRPG
const colors = require('colors')

class Player {
  constructor(newName, newPreference) {
    this.playerId = null;
    this.playerName = newName;
    this.preferences = [newPreference] || [''];
    this._lastActive = 'yesterday';
    this.complaints = [];
  }

  get playerInfo() {
    return `
### ${colors.bgBlue.black(' Player INFO ')}
----------------------------------------------
      Name/Login   ${this.playerName.red}
      Preference:  ${this.preferences.map(item => ' ' + item).rainbow} ⛺
      Last active: ${this._lastActive}
      Complaints:  ${this.complaints.length} ${this.complaints.map((complain) => complain)}
    `;
  }

  get name() { return this.playerName; }

  set name(newName) {
    if (newName) { this.playerName = newName }
  }

  // get preferences() { return this.preferences.map(preferencItem => preferencItem) }

  //set preferences(newPreferenc) { this.preferences.push(newPreferenc); }

  get lastActive() {
    return this._lastActive ? this._lastActive : 'never';
  }

  set lastActive(newActive) {
    newActive ? this._lastActive = newActive :
      function () { throw new Error(`Playername is not valid. Try another, please.`) };
  }

  // get complaints() { this.complaints.map(complainItem => complainItem + ' '); }
  // set complaints(newComplaint) { this.complaints.push(newComplaint); }

  // method player join story
  joinStory(newStory) {
    newStory.participants.push(this.playerName)
  }

  addContent(currentStory, contentNode) {
    currentStory.content.push(contentNode)
    currentStory.addParticipant(this.playerName)
  }

}

module.exports = Player;
