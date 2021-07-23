// express setup
const express = require('express')
const router = express.Router()
const axios = require('axios')

// app setup
// const Player = require('../models/player')
const Stories = require('../models/story')
const Content = require('../models/content')

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

// send all stories
router.get('/', async (req, res) => {
  const stories = await Stories.find({})
  res.send(stories)
})

// sened story by Id
router.get('/:storyId', async (req, res) => {
  const story = await Stories.findById(req.params.storyId)
  if (story) res.send(story)
  else res.sendStatus(404)
})

// create new story
router.post('/', async (req, res) => {
  const { storyName, storyTheme, storyCover } = req.body
  const story = await Stories.create({ storyName, storyTheme, storyCover })
  if (story) res.send(story)
  else res.sendStatus(404)
})

// create story content nodes
router.post('/addContent', async (req, res) => {
  const { player, story, contentNodeTxt } = req.body
  // const story = await Stories.create({ storyName, storyTheme, storyCover })
  console.log(player, story, contentNodeTxt)
  // const newContent = await Content.create({
  //   addingPlayer: player,
  //   contentNode: contentNodeTxt
  // })
  // const newContentNode = await player.addContent(story, newContent)

  if (newContentNode) res.send(newContentNode)
  else res.sendStatus(404)
})

//
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
