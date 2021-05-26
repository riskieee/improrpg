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

  addContentText(text, person) {
    this.content.push(text)
    this.participants.push(person)
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

  printStory() {
    console.log(this.name)
    this.content.forEach(text => console.table(text));
  }
}

module.exports = Story;
