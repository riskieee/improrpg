const Story = require("./story");
const Content = require("./content");
//  -----------------------------------

// create storys from class Story
const plot01 = new Story('Messenger of Doom', 'Fantasy')
const plot02 = new Story('Aliens get lost', 'SyFy')

// create content for storys from class Content
const s01Text01 = new Content('Your uncle asked you to bring a tied package to his brother in the next village. Your journey begins today. You have packed a backpack with food, a change clothes, some tools, a knife, a blanket, rope and a tent. The weather is good and you set off.','Berndt');
const s01Text02 = new Content('Todays path is relaxed and leads along the forest.You make good progress.You come to a crossroad and have to choose between several paths.','Dan');
const s01Text03 = new Content('They are 5 paths. What they be? You look around and see 5 Options.','Dan');
const s02Text01 = new Content('You arrive on the moon for a maintenance mission. The crew is eagerly awaiting you, as they have already air losses. The technician asks you to follow him right away.', 'SSkywalker');
const s02Text02 = new Content('You move weightlessly through the entire ship and can already see more tasks for later. The impact of the satellite has left not only external damage you already fixed... You reach the place with the micro hole. What do you want to do?', 'Spock');

// adding content to storys1
plot01.addContent(s01Text01)
plot01.addContent(s01Text02)
plot01.addContent(s01Text03)

// adding content to storys2
plot02.addContent(s02Text01)
plot02.addContent(s02Text02)

// Story 1
console.log(plot01.info);
console.log(plot01.printStory);

// Story 2
console.log(plot02.info);
console.table(plot01.printStory);