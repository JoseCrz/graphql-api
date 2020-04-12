'use strict'

const { ObjectID } = require('mongodb')
const connectDb = require('./db')
const errorHandler = require('./errorHandler')

module.exports = {
  Course: {
    people: async ({ people }) => {
      let db
      let peopleData = []
      let ids = []

      try {
        db = await connectDb()
        
        if (people) {
          ids = people.map(id => ObjectID(id))
        }

        if (ids.length > 0) {
          peopleData = await db.collection('students').find(
            {_id: {$in: ids}}
          ).toArray()
        }

      } catch (error) {
      errorHandler(error)
      }

      return peopleData
    }
  }
}