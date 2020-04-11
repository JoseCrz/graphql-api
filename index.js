'use strict'

const { graphql, buildSchema} = require('graphql')

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

// execute query
graphql(schema, '{ hello }', resolvers)
.then(data => {
    console.log(data)
})
.catch(error => console.log(error))