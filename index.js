const express = require('express')
const { graphql, buildSchema } = require('graphql')
const gqlMiddleware = require('express-graphql')

const config = require('./config')
const PORT = config.port

const app = express()

// define schema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)
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