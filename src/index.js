const Story = require("./story");
const Content = require("./content");
//-----------------------------------

// create storys from class Story
const plot01 = new Story('Messenger of Doom', 'Fantasy')
const plot02 = new Story('Aliens get lost', 'SyFy')

// create content for storys from class Content
const text01 = new Content('Your uncle asked you to bring a tied package to his brother in the next village. Your journey begins today. You have packed a backpack with food, a change clothes, some tools, a knife, a blanket, rope and a tent. The weather is good and you set off.', 'Berndt')
const text02 = new Content('Todays path is relaxed and leads along the forest.You make good progress.You come to a crossroad and have to choose between several paths... ', 'Dan')
// adding content to storys
plot01.addContentText(text01)
plot01.addContentText(text02)

// use story instance methods
console.log(plot01.info);
console.log(plot01.printStory);
