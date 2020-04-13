'use strict'
const express = require('express')
const { makeExecutableSchema } = require('graphql-tools')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const cors = require('cors')
const resolvers = require('./lib/resolvers')
const config = require('./config')

const DEV = config.dev
const PORT = config.port

// const db = require('./lib/db-mongoose')
// db.connect()


const app = express()

const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({typeDefs, resolvers})

app.use(cors())

app.use('/api', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: DEV
}))

app.listen(PORT, () => {
  console.log(`[App] Listening on port: ${PORT}`)
})
