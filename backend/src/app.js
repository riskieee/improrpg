// Server setup
const createError = require('http-errors')
const express = require('express')
const helmet = require('helmet') // security
const bodyParser = require('body-parser') // security
const mongoSanitize = require('express-mongo-sanitize') // security
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const cors = require('cors') // for deploy cross domain cloud
const passport = require('passport') // AUTH!
const Player = require('./models/player') // AUTH!

// mongoDB connection setup
const mongooseConnection = require('./database-connection') // AUTH!

// socket.io connection setup
const socketService = require('./socket-service')

// Route setup
const indexRouter = require('./routes/index')
const playersRouter = require('./routes/player')
const storiesRouter = require('./routes/stories')
const accountRouter = require('./routes/account') // AUTH

// App setup
// ----------------------------------------------------
const app = express()
app.use(helmet()) // security
app.use(bodyParser.urlencoded({ extended: true })) // security
app.use(bodyParser.json()) // security

// security // breaking
// app.use(mongoSanitize())
app.use(
  // mongoSanitize({
  //   replaceWith: '_'
  // }),
  cors({
    // Setup for deploy cross cloud
    origin: true,
    credentials: true
  })
)

app.set('trust proxy', 1)

// Livereload setup ONLY FOR BACKEND VIEWS
// ----------------------------------------------------
// if (app.get('env') == 'development') {
//   /* eslint-disable-next-line */
//   app.use(require('connect-livereload')())
//   /* eslint-disable-next-line */
//   require('livereload')
//     .createServer({ extraExts: ['pug'] })
//     .watch([`${__dirname}/public`, `${__dirname}/views`])
// }

// view engine setup
// -----------------------------------------
app.set('io', socketService)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// AUTH Setup
// ----------------------------------------------------
app.use(cookieParser())

app.use(
  session({
    secret: ['thisisnotasupersecuresecretsecret', 'thisisanothersupernotsosecretsecret'],
    store: MongoStore.create({ mongoUrl: mongooseConnection._connectionString, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
      path: '/api',
      sameSite: process.env.NODE_ENV == 'production' ? 'none' : 'strict', // deploy setup
      secure: process.env.NODE_ENV == 'production'
    }
  })
)

app.use(passport.initialize())
app.use(passport.session())
passport.use(Player.createStrategy())
passport.serializeUser(Player.serializeUser())
passport.deserializeUser(Player.deserializeUser())
app.use(express.static(path.join(__dirname, 'public')))

// Cookie counter in session
// -----------------------------------------
app.use('/api', (req, res, next) => {
  req.session.viewCount = req.session.viewCount || 0
  req.session.viewCount = +1
  next()
})

// App API routes
// ----------------------------------------------------
app.use('/api/', indexRouter)
app.use('/api/players', playersRouter)
app.use('/api/stories', storiesRouter)
app.use('/api/account', accountRouter)

// catch for error handler
// ----------------------------------------------------
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)

  res.send({
    status: err.status,
    message: err.message,
    stack: req.app.get('env') == 'development' ? err.stack : ''
  })
})

module.exports = app
