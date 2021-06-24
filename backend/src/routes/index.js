const express = require('express')

const router = express.Router()

const Player = require('../models/player')
const Story = require('../models/story')
const Content = require('../models/content')
const Report = require('../models/report')

// get homepage
router.get('/', async (req, res) => {
  const stories = await Story.find({})
  res.send(stories)
})

// db init content
router.get('/init', async (req, res) => {
  await Player.deleteMany()
  await Story.deleteMany()
  await Content.deleteMany()
  await Report.deleteMany()

  // creating players stories content
  const playerLuphus = await Player.create({
    playerName: 'Luphus',
    playerPreferences: ['Fantasy', 'SyFy'],
    email: 'luphus@payer.com'
  })
  await playerLuphus.setPassword('test')
  await playerLuphus.save()

  const playerErion = await Player.create({
    playerName: 'Erion',
    playerPreferences: ['Fantasy', 'Horror'],
    email: 'erison@plaer.de'
  })
  await playerErion.setPassword('test')
  await playerErion.save()

  const playerSelfil = await Player.create({
    playerName: 'Selfil',
    playerPreferences: ['Fantasy'],
    email: 'Selfil@payer.at'
  })
  await playerSelfil.setPassword('test')
  await playerSelfil.save()

  const playerLisla = await Player.create({
    playerName: 'Lisla',
    playerPreferences: ['SyFy', 'Love'],
    email: 'lisla@prayer.it'
  })
  await playerLisla.setPassword('test')
  await playerLisla.save()

  const playerDharzeth = await Player.create({
    playerName: 'Dharzeth',
    playerPreferences: ['SyFy'],
    email: 'dharzeth@prayer.org'
  })
  await playerDharzeth.setPassword('test')
  await playerDharzeth.save()

  // creating stories
  const storyFantasy = await Story.create({
    storyName: 'MessengerOfDoom',
    storyTheme: 'Fantasy',
    storyCover: 'fantasy.jpg'
  })
  const storySyFy = await Story.create({ storyName: 'Aliens get lost', storyTheme: 'SyFy', storyCover: 'syfy.jpg' })

  // create content for stories from class Content
  // + player adding content to stories
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

  console.log(storyFantasy)
  console.log(storySyFy)
  res.sendStatus(200)
})

module.exports = router
