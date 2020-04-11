const db = require('mongoose')
const mongoConfig = require('../config').mongo

db.Promise = global.Promise

const mongoURI = `mongodb+srv://${mongoConfig.dbUser}:${mongoConfig.dbPassword}@${mongoConfig.dbHost}/${mongoConfig.dbName}?retryWrites=true&w=majority`

const connect = () => {
  db.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('[DB] Connected Succesfully!'))
  .catch(error => {
    console.log('[DB] ERROR', error)
    process.exit(1)
  })
}

module.exports = {
  connect
}