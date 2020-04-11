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
  deleteCourse: async (root, { _id }) => {
    let db
    let result
    try {
      db = await connectDb()
      result = await db.collection('courses').deleteOne({_id: ObjectID(_id)})
    } catch (error) {
    console.error("error", error) 
    }
    return result
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
  },
  deleteStudent: async (root, { _id } ) => {
    let db
    let result
    try {
      db = await connectDb()
      result = await db.collection('students').deleteOne({_id: ObjectID(_id)})
    } catch (error) {
      console.log(error)
    }
    console.log("result", result)
    return result
  },
  addPersonToCourse: async (root, { personID, courseID }) => {
    let db
    let person
    let course
    try {
      db = await connectDb()
      person = await db.collection('students').findOne({_id: ObjectID(personID)})
      course = await db.collection('courses').findOne({_id: ObjectID(courseID)})

      if (!person || !course) {
        throw new Error('Couldn\'t find person or course')
      }

      await db.collection('courses').updateOne(
        {_id: ObjectID(courseID)},
        {$addToSet: { people: ObjectID(personID) }}
      )

    } catch (error) {
      console.log("error", error)
    }
    return course
    
  },
}