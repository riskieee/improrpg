// express setup
const express = require('express')

const router = express.Router()

// app setup
// const Player = require('../models/player')
const Storys = require('../models/story')
// const Content = require('../models/content')

/* GET users listing. */
// router.get('/', (req, res) => {
// let result = Storys
//
// if (req.query.story) {
// result = Storys.filter(story => story.storyName == req.query.storyName)
// }
//
// res.send(result)
// })
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.storyName) {
    query.storyName = req.query.storyName
  }

  if (req.query.storyCover) {
    query.storyCover = req.query.storyCover
  }

  res.send(await Storys.find(query))
})
router.get('/:storyId', async (req, res) => {
  const story = await Storys.findById(req.params.storyId)
  if (story) res.send(story)
  else res.sendStatus(404)
})

router.get('/:userId/json', async (req, res) => {
  const story = await Storys.findById(req.params.userId)
  res.send(story)
})

// router.get('/:storyName', (req, res) => {
//   const story = Storys.find(findStory => findStory.storyName == req.params.storyName)

//   if (story) res.render('story', { story })
//   else res.sendStatus(404)
// })

module.exports = router
