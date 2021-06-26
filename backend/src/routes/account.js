const express = require('express')
const passport = require('passport')

const Player = require('../models/player')

const router = express.Router()

router.get('/session', (req, res) => {
  res.send(req.player) // before session
})

// seems not work
router.post('/', async (req, res, next) => {
  const { playerName, email, password } = req.body

  try {
    const player = await Player.register({ playerName, email }, password)
    res.send(player)
  } catch (e) {
    next(e)
  }
})

// tried but didnt work
// router.post('/register', async (req, res, next) {
//   console.log('registering user')
//   Account.register(new Account({ username: req.body.username }), req.body.password, function (err) {
//     if (err) {
//       console.log('error while user register!', err)
//       return next(err)
//     }
//     console.log('user registered!')
//     res.redirect('/')
//   })
// })

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
