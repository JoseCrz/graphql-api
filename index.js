'use strict'
const express = require('express')
const { makeExecutableSchema } = require('graphql-tools')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const config = require('./config')
const PORT = config.port

const app = express()

const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')

const schema = makeExecutableSchema({typeDefs, resolvers})

app.use('/api', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`[App] Listening on port: ${PORT}`)
})
