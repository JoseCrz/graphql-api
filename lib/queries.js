'use strict'
const { ObjectID } = require('mongodb')
const connectDb = require('./db')

module.exports = {
  getCourses: async () => {
    let db
    let courses = []
    try {
      db = await connectDb()
      courses = await db.collection('courses').find({}).toArray()
    } catch (error) {
      console.error(error)
    }
    return courses
  },
  getCourse: (root, args) => {
    const course = courses.find(course => course._id === args._id)
    return course
  }
}
