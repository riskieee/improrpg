// express setup
const express = require('express')

const router = express.Router()

// App setup
// const Player = require('../models/db')
// const { request } = require('../app')
const Players = require('../models/player')
const Storys = require('../models/story')

/* GET users listing. */
router.get('/', (req, res) => {
  // let result = storys
  let result = Players

  if (req.query.playerName) {
    result = Players.filter(player => player.playerName == req.query.playerName)
  }

  if (req.query.storyName) {
    result = Storys.filter(story => story.storyName == req.query.storyName)
  }

  res.send(result)
})

router.get('/:playerName', (req, res) => {
  const player = Players.find(findPlayer => findPlayer.playerName == req.params.playerName)

  if (player) res.render('player', { player })
  else res.sendStatus(404)
})

router.get('/:storyName', (req, res) => {
  const story = Storys.find(findStory => findStory.storyName == req.params.storyName)

  if (story) res.render('story', { story })
  else res.sendStatus(404)
})

module.exports = router
// export here more stuff like needed player array and include in index
