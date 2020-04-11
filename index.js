'use strict'

const { graphql, buildSchema} = require('graphql')

// defininf schema

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

graphql(schema, '{ hello }')
.then(data => {
    console.log(data)
})
.catch(error => console.log(error))