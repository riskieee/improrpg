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
      STORY INFO
      ----------------------------------
      This is:     ${this.name}
      about:       ${this.theme} ⛺
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

    return `Story: ${this.name} ${'\n'}
    .... here comes the Storycontent .... later ${'\n'}
    .... ${'\n'}`  // + this.content.map((contentNode) => typeof(contentNode))
  }

}

module.exports = Story;
