// Server setup
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport') // AUTH!
const Player = require('./models/player') // AUTH!

// mongoDB connection setup
const mongooseConnection = require('./database-connection') // AUTH!

// Route setup https://masteringjs.io/tutorials/express/app-use
const indexRouter = require('./routes/index')
const playersRouter = require('./routes/player')
const storiesRouter = require('./routes/stories')
const accountRouter = require('./routes/account') // AUTH

// App setup
// ----------------------------------------------------
const app = express()

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
    // store: new MongoStore({ mongoUrl: process.env.MONGODB_CONNECTION_STRING, stringify: false }),
    // store: new MongoStore({ mongoUrl: mongooseConnection, stringify: false }),
    // store: new MongoStore({ mongoUrl: 'mongodb://mongo/improrpg', stringify: false }),
    store: MongoStore.create({ mongoUrl: mongooseConnection._connectionString, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
      path: '/api'
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
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
