// express setup
const express = require('express')
const router = express.Router()
const axios = require('axios')

// app setup
// const Player = require('../models/player')
const Stories = require('../models/story')
// const Content = require('../models/content')

/* GET users listing. */
// router.get('/', (req, res) => {
// let result = Stories
//
// if (req.query.story) {
// result = Stories.filter(story => story.storyName == req.query.storyName)
// }
//
// res.send(result)
// })

// old style
// router.get('/', async (req, res) => {
//   const query = {}

//   if (req.query.storyName) {
//     query.storyName = req.query.storyName
//   }

//   if (req.query.storyCover) {
//     query.storyCover = req.query.storyCover
//   }
//   res.send(await Stories.find(query))
// })

router.get('/', async (req, res) => {
  const stories = await Stories.find({})
  res.send(stories)
})

router.get('/:storyId', async (req, res) => {
  const story = await Stories.findById(req.params.storyId)
  if (story) res.send(story)
  else res.sendStatus(404)
})

router.get('/:storyId/json', async (req, res) => {
  const story = await Stories.findById(req.params.storyId)
  res.send(story)
})

// router.get('/:storyName', (req, res) => {
//   const story = Stories.find(findStory => findStory.storyName == req.params.storyName)

//   if (story) res.render('story', { story })
//   else res.sendStatus(404)
// })

module.exports = router
