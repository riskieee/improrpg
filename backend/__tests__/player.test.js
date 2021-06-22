const { ExpectationFailed } = require('http-errors')
const request = require('supertest')
const app = require('../src/app')

describe('Player endpoints', () => {
  it('post req to create a player', async () => {
    const playerToCreate = {
      playerName: 'Bobo',
      playerPreferences: ['PopFy', 'Cyber'],
      playerMail: 'bobo@play.it'
    }

    const createdUser = (await request(app).post('/api/players').send(playerToCreate)).body
    expect(createdUser.playerName).toBe(playerToCreate.playerName)
    expect(createdUser.playerPreferences).toBe(playerToCreate.playerPreferences)
    expect(createdUser.playerMail).toBe(playerToCreate.playerMail)
  })
})
