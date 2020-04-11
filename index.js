'use strict'
const express = require('express')
const { buildSchema } = require('graphql')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')

const config = require('./config')
const PORT = config.port

const app = express()

// define schema
const schema = buildSchema(readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8'))
// define resolver
const resolvers = {
  hello: () => {
    return 'Hello world'
  }
}

app.use('/api', gqlMiddleware({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`[App] Listening on port: ${PORT}`)
})
