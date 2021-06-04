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

// player adding content to storyFantasy
// need solution to get created storys from routes/story.js

// playerLuphus.addContent(storyFantasy, s01Text01)
// playerErion.addContent(storyFantasy, s01Text02)
// playerSelfil.addContent(storyFantasy, s01Text03)

// player adding content to storySyfy

// playerLisla.addContent(storySyFy, s02Text01)
// playerDharzeth.addContent(storySyFy, s02Text02)

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
  const player = players.find(findPlayer => findPlayer.playerName == req.params.playerName)

  if (player) res.render('player', { player })
  else res.sendStatus(404)
})

module.exports = router
