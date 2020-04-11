'use strict'

  // {
  //   title: 'Desarrollo Web',
  //   teacher: 'Leonidas Esteban',
  //   description: 'Una descripción cool',
  //   topic: 'HTML, CSS, JS'
  // },
  // {
  //   title: 'Fundamentos de JavaScript',
  //   teacher: 'Sacha Lyfszic',
  //   description: 'Una descripción cool',
  //   topic: 'JavaScript'
  // }

const connectDb = require('./db')

module.exports = {
  Query: {
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
}
