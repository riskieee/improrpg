const express = require('express')
const { Error } = require('mongoose')
const passport = require('passport')

const Player = require('../models/player')

const router = express.Router()

router.get('/session', (req, res) => {
  res.send(req.user) // before session
})

// register new player
router.post('/', async (req, res, next) => {
  const { playerName, email, password } = req.body

  try {
    const player = await Player.register({ playerName, email }, password)
    res.send(player)
  } catch (err) {
    console.log('Error! Player NOT registered!', err)
    next(err)
  }
})

// AUTH session management
router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

router.delete('/session', async (req, res, next) => {
  await req.logout()

  // new session after logout for security
  req.session.regenerate(err => {
    if (err) return next(err)

    return res.sendStatus(200)
  })
})

module.exports = router
