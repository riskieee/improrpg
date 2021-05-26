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
      This is:     ${this.name}
      about:       ${this.theme} ⛺
      player:      ${this.participants.length}
      locations:   ${this.content.length}
      last played: ${this.lastEdit} ⏲
    `
  }
  set info(newValue) {
    throw new Error(
      `A Story.info is only a getter. You can't override infos it with ${newValue}.`
    );
  }

  addContentText(text, person) {
    this.content.push([text, person])
  }
  _
  addContentDecision(option, person) {
    this.content.push(option)
    this.participants.push(person)
  }
  _
  addParticipant(person) {
    this.participants.push(person)
  }

  get printStory() {
    return this.name + '\n' +
      this.content.map((contentNode) => contentNode.map((contetItem) => contetItem))
  }
}

module.exports = Story;
