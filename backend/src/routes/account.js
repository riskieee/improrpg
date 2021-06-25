const express = require('express')
const passport = require('passport')

const Player = require('../models/player')

const router = express.Router()

router.get('/session', (req, res) => {
  res.send(req.player) // before session
})

router.post('/', async (req, res, next) => {
  const { playerName, email, password } = req.body

  try {
    const player = await Player.register({ playerName, email }, password)
    res.send(player)
  } catch (e) {
    next(e)
  }
})

router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.player)
})

router.delete('/session', async (req, res, next) => {
  await req.logout()

  req.session.regenerate(err => {
    if (err) return next(err)

    return res.sendStatus(200)
  })
})

module.exports = router
