// express setup
const express = require('express')

const router = express.Router()

// App setup
// const Player = require('../models/db')
// const { request } = require('../app')
const Players = require('../models/player')
// const Stories = require('../models/story')

/* GET users listing. */
router.get('/', async (req, res) => {
  const players = await Players.find({})
  res.render('player', { players })
  // if (req.query.storyName) {
  //   result = Stories.filter(story => story.storyName == req.query.storyName)
  // }

  // const query = {} // initial get all
  // const players = await Person.find({})
  // explicitly name allowed searches for safty by URL: localhost:3000/stories
  // if (req.query.storyName) {
  //   query.storyName = req.query.storyName
  // }

  // if (req.query.storyTheme) {
  //   query.storyTheme = req.query.storyTheme
  // }
  // res.render('index', { message: 'hello as json' })
  // res.send(result)
})

// if (req.query.playerName) {
//   //result = Players.filter(player => player.playerName == req.query.playerName)
//   query.storyName = req.query.storyName
// }
//   res.render('player', { query.storyName })

router.get('/:playerName', (req, res) => {
  const player = Players.find(findPlayer => findPlayer.playerName == req.params.playerName)

  if (player) res.render('player', { player })
  else res.sendStatus(404)
})

// router.get('/:storyName', (req, res) => {
//   const story = Stories.find(findStory => findStory.storyName == req.params.storyName)

//   if (story) res.render('story', { story })
//   else res.sendStatus(404)
// })

/* POST create a player */
router.post('/', async (req, res) => {
  const createdPlayer = await Players.create(req.body)
  res.send(createdPlayer)
})

module.exports = router
// export here more stuff like needed player array and include in index
