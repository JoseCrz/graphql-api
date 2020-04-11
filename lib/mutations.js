'use strict'
const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = { // cause not all queries have to contain all the values
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
  editCourse: async (root, { _id, input }) => {
    let db
    let course
    try {
      db = await connectDb()
      await db.collection('courses').updateOne(
        { _id: ObjectID(_id) }, //search condition
        {$set: input} //setting new values
      )
      course = await db.collection('courses').findOne({_id: ObjectID(_id)})
    } catch (error) {
      console.error(error)
    }
    return course
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
  },
  editStudent: async (root, { _id, input }) => {
    let db
    let student
    
    try {
      db = await connectDb()
      await db.collection('students').updateOne(
        {_id: ObjectID(_id)},
        {$set: input}
      )
      student = await db.collection('students').findOne({_id: ObjectID(_id)})
    } catch (error) {
      console.error(error)
    }
    
    return student
  }
}