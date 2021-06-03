// express setup
const express = require('express')
const router = express.Router()

// app setup
const Player = require('../models/player')
const Story = require('../models/story')
const Content = require('../models/content')
const TimeStamp = require('../models/timestamp')

// ToDo: create storys from class Story

// creating players
const playerLuphus = new Player('Luphus', 'Fantasy')
const playerErion = new Player('Erion', 'Fantasy')
const playerSelfil = new Player('Selfil', 'Fantasy')
const playerLisla = new Player('Lisla', 'SyFy')
const playerDharzeth = new Player('Dharzeth', 'SyFy')

// creating storys
const storyFantasy = new Story('Messenger of Doom', 'Fantasy')
const storySyFy = new Story('Aliens get lost', 'SyFy')

// create content for storys from class Content
const s01Text01 = new Content('Your uncle asked you to bring a tied package to his br0other in the next village. Your journey begins today. You have packed a backpack with food, a change clothes, some tools, a knife, a blanket, rope and a tent. The weather is good and you set off.')
const s01Text02 = new Content('Todays path is relaxed and leads along the forest.You make good progress.You come to a crossroad and have to choose between several paths.')
const s01Text03 = new Content('They are 5 paths. What they be? You look around and see 5 Options.')
const s02Text01 = new Content('You arrive on the moon for a maintenance mission. The crew is eagerly awaiting you, as they have already air losses. The technician asks you to follow him right away.')
const s02Text02 = new Content('You move weightlessly through the entire ship and can already see more tasks for later. The impact of the satellite has left not only external damage you already fixed... You reach the place with the micro hole. What do you want to do?')

// player adding content to storyFantasy
playerLuphus.addContent(storyFantasy, s01Text01)
playerErion.addContent(storyFantasy, s01Text02)
playerSelfil.addContent(storyFantasy, s01Text03)
// player adding content to storySyfy
playerLisla.addContent(storySyFy, s02Text01)
playerDharzeth.addContent(storySyFy, s02Text02)

// DEMO SETUP
// const steve = new User('steve', 21)
//steve.bio = 'An awesome hacker who has seen it all, and now sharing them all with you.'
// const berlinPhoto = new Photo('berlin.jpg')
// const munichPhoto = new Photo('munich.jpg')
// steve.addPhoto(berlinPhoto)
// steve.addPhoto(munichPhoto)
// armagan.likePhoto(berlinPhoto)
// mihri.likePhoto(berlinPhoto)

const players = [playerLuphus, playerErion, playerSelfil, playerLisla, playerDharzeth]

/* GET users listing. */
router.get('/', (req, res) => {
  let result = players

  if (req.query.playerName) {
    result = players.filter(player => player.playerName == req.query.playerName)
  }

  res.send(result)
})

router.get('/:playerName', (req, res) => {
  const player = players.find(player => player.playerName == req.params.playerName)

  if (player) res.render('player', { player })
  else res.sendStatus(404)
})

module.exports = router
