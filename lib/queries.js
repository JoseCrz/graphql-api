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
  getCourse: async (root, { _id }) => {
    let db
    let course
    try {
      db = await connectDb()
      course = await db.collection('courses').findOne({_id: ObjectID(_id)})
      
    } catch (error) {
      console.log(error)
    }
    return course
  },
  getStudents: async () => {
    let db
    let students = []
    try {
      db = await connectDb()
      students = await db.collection('students').find({}).toArray()
    } catch (error) {
      console.log(error)
    }
    return students
  },
  getStudent: async (root, { _id }) => {
    let db
    let student
    try {
      db = await connectDb()
      student = await db.collection('students').findOne({_id: ObjectID(_id)})
    } catch (error) {
      console.error(error)
    }
    return student
  }
}
