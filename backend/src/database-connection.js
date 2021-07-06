const mongoose = require('mongoose')
// require('dotenv').config() // alternate env solution for var credentials setup for mongoDB
// console.log(process.env) // check env's

// connect by docker-compose.yml passing connectionString
let connectionString = process.env.MONGODB_CONNECTION_STRING

// if not by docker-compose.yml and connectionString connect to mongoDB atlas cloud credentials saved in local OS or .env
const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE
const atlaspath = process.env.MONGODB_ATLASPATH

if (!connectionString) {
  connectionString = `mongodb+srv://${username}:${password}@${atlaspath}/${dbName}?retryWrites=true&w=majority`
}

mongoose.set('debug', true) // see all query logs and calls when started as DEBUG=* nodemon

mongoose
  .connect(
    // rebuild from local stored .env variables
    // `mongodb+srv://${username}:${password}@improrpg.rwmyc.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    connectionString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log('connection established: ', connectionString))
  .catch(console.log)

module.exports = mongoose.connection
