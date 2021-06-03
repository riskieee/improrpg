// dependinig external npm packages
const colors = require('colors')
const qrcode = require('qrcode-terminal')

// main Story class for improRPG

class Story {
  _participants = []
  _lastEdit = 0
  _contents = []
  constructor(newName, newTheme) {
    this._storyName = newName
    this._storyTheme = newTheme
  }

  get storyInfo() {
    return `
### ${colors.bgBlue.black(' STORY INFO ')}
----------------------------------------------
      This is:     ${this._storyName.red}
      about:       ${this._storyTheme.rainbow} ⛺
      player:      ${this._participants.length} ${this._participants.map(player => ' ' + player)}
      locations:   ${this._contents.length}
      last played: ${this._lastEdit} ⏲
    `
  }

  // set info(newValue) { throw new Error(`A Story.info is only a getter. You can't override infos it with ${newValue}.`); }

  joinStory(personName) {
    this._participants.push(personName)
  }

  get printStory() {
    // qrcode.generate('https://improrpg.de/');
    return `-----------------------------------------------
### ${'So far the Story of'.bold} ${this._storyName.red}

${this._contents.map((contentNode) => '> ' + contentNode.storyNode + '\n')}
    `
  }
}
 
module.exports = Story
