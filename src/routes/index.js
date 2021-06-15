const express = require('express')

const router = express.Router()

const Player = require('../models/player')
const Story = require('../models/story')
const Content = require('../models/content')
const Report = require('../models/report')

router.get('/', async (req, res) => {
  const storys = await Story.find({})
  res.render('index', { storys })
})

// ///////// db init content
router.get('/init', async (req, res) => {
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
  // + player adding content to storys
  const contents01Text01 = await Content.create({
    addingPlayer: playerLuphus,
    storyTheme: 'SyFy',
    contentNode:
      'Your uncle asked you to bring a tied package to his br0other in the next village. Your journey begins today. You have packed a backpack with food, a change clothes, some tools, a knife, a blanket, rope and a tent. The weather is good and you set off.'
  })
  await playerLuphus.addContent(storyFantasy, contents01Text01)

  const contents01Text02 = await Content.create({
    addingPlayer: playerLuphus,
    storyTheme: 'SyFy',
    contentNode:
      'Todays path is relaxed and leads along the forest.You make good progress.You come to a crossroad and have to choose between several paths.'
  })
  await playerErion.addContent(storyFantasy, contents01Text02)

  const contents01Text03 = await Content.create({
    addingPlayer: playerSelfil,
    storyTheme: 'SyFy',
    contentNode: 'They are 5 paths. What they be? You look around and see 5 Options.'
  })
  await playerSelfil.addContent(storyFantasy, contents01Text03)

  const contents02Text01 = await Content.create({
    addingPlayer: playerLisla,
    storyTheme: 'SyFy',
    contentNode:
      'You arrive on the moon for a maintenance mission. The crew is eagerly awaiting you, as they have already air losses. The technician asks you to follow him right away.'
  })
  await playerLisla.addContent(storySyFy, contents02Text01)

  const contents02Text02 = await Content.create({
    addingPlayer: playerDharzeth,
    storyTheme: 'SyFy',
    contentNode:
      'You move weightlessly through the entire ship and can already see more tasks for later. The impact of the satellite has left not only external damage you already fixed... You reach the place with the micro hole. What do you want to do?'
  })
  await playerDharzeth.addContent(storySyFy, contents02Text02)

  res.sendStatus(200)
})

// router.post('/bootstrap', (req, res) => {
//   res.render('bootstrap', { title: 'bootstrap' })
// })

// router.post('/bootstrap', (req, res) => {
//   res.render('bootstrap', { title: 'bootstrap' })
// })

module.exports = router
