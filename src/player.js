'use strict';
// main Story class for improRPG

class Player {
  constructor(name, theme) {
    this.playerId = null;
    this.name = name;
    this.preferences = [];
    this.lastActive = null;
    this.complaints = [];
  }

  get info() {
    return `
### ${colors.bgBlue.black(' Player INFO ')}
----------------------------------------------
      Name/Login   ${this.name.red}
      Preference:  ${this.preference.rainbow} ⛺
      Last active:  ${this.lastActive}
      Complaints:  ${this.complaints.length + ' ' + this.complaints.map((complain) => complain + ' ')} ⏲
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  set info(newValue) {
    throw new Error(`Player Info is only a getter. You can't override here infos with ${newValue}.`);
  }

  get name() { return this.name; }
  set name(newName) { this.name.push(newName); }

  get preferences() { this.preferences.map(preferencItem => preferencItem + ' '); }
  set preferences(newPreferenc) { this.preferences.push(newPreferenc); }

  get lastActive() { return this.lastActive; }
  set name(newActive) { if (newActive.length) this.name = newActive; }

  get complaints() { this.complaints.map(complainItem => complainItem + ' '); }
  set complaints(newComplaint) { this.complaints.push(newComplaint); }

}

module.exports = Player;
