const Stories = require('./models/story')

const io = require('socket.io')({
  cors: {
    origin: true,
    methods: ['GET', 'POST'],
    credentials: true
  }
})

io.on('connect', socket => {
  socket.emit('connection established')

  // adding new story content
  socket.on('NewContent', content => {
    console.log(`NewContent ${content.contentNode} by ${content.addingPlayer}`)
    socket.broadcast.emit('StoryContent', content)
  })

  // live chat on user-detail / profile-page
  socket.on('new message', (streamId, message) => {
    socket.to(streamId).emit('new live stream message', message)
  })
  socket.on('join stream', streamId => {
    socket.join(streamId)
  })
  socket.on('go live', (userId, cb) => {
    console.log(`${userId} is going live`)

    socket.broadcast.emit('new live stream', userId)
    socket.join(userId)
    cb(true)
  })

  // live story on story-detail
  socket.on('new story content', async (streamId, content) => {
    const story = await Stories.findById(streamId)
    socket.to(streamId).emit('new live story stream contnet', story)
  })
  socket.on('join story stream', streamId => {
    socket.join(streamId)
  })
  socket.on('go story live', (userId, cb) => {
    console.log(`${userId} is going live in story`)

    socket.broadcast.emit('new live story stream', userId)
    socket.join(userId)
    cb(true)
  })
})

module.exports = io
