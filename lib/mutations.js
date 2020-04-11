'use strict'
const connectDb = require('./db')
module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }
    const newCourse = Object.assign(defaults, input)
    let db
    let course

    try {
      db = await connectDb()
      course = await db.collection('courses').insertOne(newCourse)
      newCourse._id = course.insertedId
    } catch (error) {
      console.error(error)
    }

    return newCourse
  },
  createStudent: async (root, { input }) => {
    const newStudent = input
    let db
    let student
    try {
      db = await connectDb()
      student = await db.collection('students').insertOne(newStudent)
      newStudent._id = student.insertedId
    } catch (error) {
      console.error(error)
    }

    return newStudent
  }
}