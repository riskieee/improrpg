// NOT IN USE

const Story = require('./story');
const Content = require('./content');
const Player = require('./player');
const TimeStamp = require('./models/timestamp')
//  -----------------------------------

// create players > content > text
// create storys from class Story

// creating players
const playerLuphus = new Player('Luphus', 'Fantasy');
const playerErion = new Player('Erion', 'Fantasy');
const playerSelfil = new Player('Selfil', 'Fantasy');
const playerLisla = new Player('Lisla', 'SyFy');
const playerDharzeth = new Player('Dharzeth', 'SyFy');

// creating storys
const storyFantasy = new Story('Messenger of Doom', 'Fantasy');
const storySyFy = new Story('Aliens get lost', 'SyFy');

// create content for storys from class Content
const s01Text01 = new Content(
  'Your uncle asked you to bring a tied package to his brother in the next village. Your journey begins today. You have packed a backpack with food, a change clothes, some tools, a knife, a blanket, rope and a tent. The weather is good and you set off.'
);
const s01Text02 = new Content(
  'Todays path is relaxed and leads along the forest.You make good progress.You come to a crossroad and have to choose between several paths.'
);
const s01Text03 = new Content('They are 5 paths. What they be? You look around and see 5 Options.');
const s02Text01 = new Content(
  'You arrive on the moon for a maintenance mission. The crew is eagerly awaiting you, as they have already air losses. The technician asks you to follow him right away.'
);
const s02Text02 = new Content(
  'You move weightlessly through the entire ship and can already see more tasks for later. The impact of the satellite has left not only external damage you already fixed... You reach the place with the micro hole. What do you want to do?'
);

// player adding content to storyFantasy
playerLuphus.addContent(storyFantasy, s01Text01);
playerErion.addContent(storyFantasy, s01Text02);
playerSelfil.addContent(storyFantasy, s01Text03);

// player adding content to storySyfy
playerLisla.addContent(storySyFy, s02Text01);
playerDharzeth.addContent(storySyFy, s02Text02);

// Story 1
console.log(storyFantasy.storyInfo);
console.log(storyFantasy.printStory);

// Story 2
console.log(storySyFy.storyInfo);
console.table(storySyFy.printStory);

// Timestamp test class not used yet
const timer = new TimeStamp();
console.log(`Timestamp:  ${timer.timeNow}`);

// Report
playerLuphus.addReport(playerErion, "He has killed way too much Oger! I didn't get one...");
console.log(playerErion.reportInfo);

// player Infos
console.log(playerErion.playerInfo);
