// dependinig external npm packages
var colors = require('colors');
var qrcode = require('qrcode-terminal');

// main Story class for improRPG

class Story {

  constructor(name, theme) {

    this.name = name
    this.theme = theme
    this.participants = []
    this.lastEdit = 0
    this.content = []

  }

  get info() {

    return `
### ${colors.bgBlue.black(' STORY INFO ')}
----------------------------------------------
      This is:     ${this.name.red}
      about:       ${this.theme.rainbow} ⛺
      player:      ${this.participants.length}
      locations:   ${this.content.length}
      last played: ${this.lastEdit} ⏲
    `
  }

  set info(newValue) {

    // throw new Error(`A Story.info is only a getter. You can't override infos it with ${newValue}.`);

  }

  addContent(text, person) {
    const contentNode = {
      content: text,
      author: person,
      time: ""
    }
    this.content.push(contentNode);
  }

  //  addContentDecision(option, person) {
  //    this.content.push(option)
  //    this.participants.push(person)
  //  }

  addParticipant(person) {

    this.participants.push(person)

  }

  get printStory() {

    return `### ${'So far the Story of'.bold} ${this.name.red} ${'\n'}
-----------------------------------------------
    .... here comes the Storycontent .... later ${'\n'}
    .... ${'\n'}
    check out the APP ON improrpg.de
    ${qrcode.generate('https://improrpg.de/')};
    `
    // TO FIX  this.content.map((contentNode) => contentNode.content)
  }

}

module.exports = Story;
