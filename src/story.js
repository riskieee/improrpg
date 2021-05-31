// dependinig external npm packages
const colors = require('colors')
const qrcode = require('qrcode-terminal')

// main Story class for improRPG

class Story {
  constructor(name, theme) {
    this.name = name
    this.theme = theme
    this.participants = []
    this.lastEdit = 0
    this.content = [] // > change to contents
  }

  get info() {
    return `
### ${colors.bgBlue.black(' STORY INFO ')}
----------------------------------------------
      This is:     ${this.name.red}
      about:       ${this.theme.rainbow} ⛺
      player:      ${this.participants.length} ${this.participants.map(player => ' ' + player)}
      locations:   ${this.content.length}
      last played: ${this.lastEdit} ⏲
    `
  }

  // set info(newValue) { throw new Error(`A Story.info is only a getter. You can't override infos it with ${newValue}.`); }

  addParticipant(personName) {
    this.participants.push(personName)
  }

  get printStory() {
    // qrcode.generate('https://improrpg.de/');
    return `-----------------------------------------------
### ${'So far the Story of'.bold} ${this.name.red}

${this.content.map((contentNode) => '> ' + contentNode.storyNode + '\n')}
    `
  }
}

module.exports = Story
