/* NOT IN USE

ToDo
-  require here all stuff like before in index
- index > create player + story require in app .js > before all
- require models and all but not elsewhere > class export or here create person export  that many arrays al player or storys ...
- in routes import all arrays (player storys)
- for testing .... aber dann database und mongodb
*/

// app setup
const Player = require('./player')
const Story = require('./story')
const Content = require('./content')
const Report = require('./report')

// preparing for end-export
const players = []
const storys = []

async function initalizeProject() {
  await Player.deleteMany()
  await Story.deleteMany()
  await Content.deleteMany()
  await Report.deleteMany()

  // creating players storys content

  const playerLuphus = await Player.create({
    playerName: 'Luphus',
    playerPreferences: ['Fantasy', 'SyFy'],
    playerMail: 'luphus@payer.com'
  })
  const playerErion = await Player.create({
    playerName: 'Erion',
    playerPreferences: ['Fantasy', 'Horror'],
    playerMail: 'erison@plaer.de'
  })
  const playerSelfil = await Player.create({
    playerName: 'Selfil',
    playerPreferences: ['Fantasy'],
    playerMail: 'Selfil@payer.at'
  })
  const playerLisla = await Player.create({
    playerName: 'Lisla',
    playerPreferences: ['SyFy', 'Love'],
    playerMail: 'lisla@prayer.it'
  })
  const playerDharzeth = await Player.create({
    playerName: 'Dharzeth',
    playerPreferences: ['SyFy'],
    playerMail: 'dharzeth@prayer.org'
  })

  // creating storys
  const storyFantasy = await Story.create({
    storyName: 'MessengerOfDoom',
    storyTheme: 'Fantasy',
    storyCover: 'fantasy.jpg'
  })
  const storySyFy = await Story.create({ storyName: 'Aliens get lost', storyTheme: 'SyFy', storyCover: 'syfy.jpg' })

  // create content for storys from class Content
  const s01Text01 = new Content(
    'Your uncle asked you to bring a tied package to his br0other in the next village. Your journey begins today. You have packed a backpack with food, a change clothes, some tools, a knife, a blanket, rope and a tent. The weather is good and you set off.'
  )
  const s01Text02 = new Content(
    'Todays path is relaxed and leads along the forest.You make good progress.You come to a crossroad and have to choose between several paths.'
  )
  const s01Text03 = new Content('They are 5 paths. What they be? You look around and see 5 Options.')
  const s02Text01 = new Content(
    'You arrive on the moon for a maintenance mission. The crew is eagerly awaiting you, as they have already air losses. The technician asks you to follow him right away.'
  )
  const s02Text02 = new Content(
    'You move weightlessly through the entire ship and can already see more tasks for later. The impact of the satellite has left not only external damage you already fixed... You reach the place with the micro hole. What do you want to do?'
  )

  // player adding content to storys
  await playerLuphus.addContent(storyFantasy, s01Text01)
  await playerErion.addContent(storyFantasy, s01Text02)
  await playerSelfil.addContent(storyFantasy, s01Text03)
  await playerLisla.addContent(storySyFy, s02Text01)
  await playerDharzeth.addContent(storySyFy, s02Text02)

  // sum up for export
  // players.push([playerLuphus, playerErion, playerSelfil, playerLisla, playerDharzeth])
  // storys.push([storyFantasy, storySyFy])
}

initalizeProject()

module.exports = { players, storys }
