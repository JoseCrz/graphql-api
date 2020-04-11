const { MongoClient } = require('mongodb')
const mongoConfig = require('../config').mongo

const mongoURI = `mongodb+srv://${mongoConfig.dbUser}:${mongoConfig.dbPassword}@${mongoConfig.dbHost}/${mongoConfig.dbName}?retryWrites=true&w=majority`

let connection

const connectDB = async () => {
  if(connection) return connection
  
  let client
  try {
    client = await MongoClient.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    connection = client.db(mongoConfig.dbName)
  } catch (error) {
    console.error('[DB] Error connecting', error)
    process.exit(1)
  }
  return connection
}

module.exports = connectDB
