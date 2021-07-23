// express setup
const express = require('express')

const router = express.Router()
const Player = require('../models/player')

// playersRouter /api/players/
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.playerName) {
    query.playerName = req.query.playerName
  }

  if (req.query.playerPhoto) {
    query.playerPhoto = req.query.playerPhoto
  }

  if (req.query.playerLastActive) {
    query.playerLastActive = req.query.playerLastActive
  }

  res.send(await Player.find(query))
})

router.get('/:playerName', (req, res) => {
  const player = Player.find(findPlayer => findPlayer.playerName == req.params.playerName)

  if (player) res.send(player)
  else res.sendStatus(404)
})

router.post('/', async (req, res) => {
  const playerToCreate = {
    playerName: req.body.playerName,
    playerPreferences: req.body.playerPreferences,
    playerMail: req.body.playerMail,
    playerPhoto: req.body.playerPhoto
  }

  const createdPlayer = await Player.create(playerToCreate)
  res.send(createdPlayer)
})

router.get('/:playerId', async (req, res) => {
  const player = await Player.findById(req.params.playerId)

  if (player) res.send(player)
  else res.sendStatus(404)
})

router.get('/:playerId/json', async (req, res) => {
  const player = await Player.findById(req.params.playerId)
  res.send(player)
})

module.exports = router
