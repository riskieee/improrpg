class Story {
  constructor(name, theme) {
    this.name = name
    this.theme = theme
    this.participants = []
    this.lastEdit = 0
    this.content = []
  }

  getInfo() {
    console.log(`
      This is ${this.name}!,
      about ${this.theme}
      with ${this.participants.length}
      added ${this.content.length} locations
      playd last time ${this.lastEdit}
    `)
  }

  addContentText(text, person) {
    this.content.push(text)
    this.participants.push(person)
  }

  addContentDecision(option, person) {
    this.content.push(option)
    this.participants.push(person)
  }

  addParticipant(person) {
    this.participants.push(person)
  }

  printStory() {
    console.log(this.name)
    this.content.forEach(text => console.table(text));
  }
}

class Content {
  constructor(text, author) {
    this.text = text
    this.addedBy = author
  }
}

const plot01 = new Story('Messenger of Doom', 'Fantasy')
const plot02 = new Story('Aliens get lost', 'SyFy')

const text01 = new Content('Your uncle asked you to bring a tied package to his brother in the next village. Your journey begins today. You have packed a backpack with food, a change clothes, some tools, a knife, a blanket, rope and a tent. The weather is good and you set off.', 'Berndt')
const text02 = new Content('Todays path is relaxed and leads along the forest.You make good progress.You come to a crossroad and have to choose between several paths... ', 'Dan')
plot01.addContentText(text01)
plot01.addContentText(text02)

plot01.getInfo(plot01)
plot01.printStory()
