'use strict'

const courses = [
  {
    _id: 'anyID1',
    title: 'Programación Básica',
    teacher: 'Freddy Vega',
    description: 'Una descripción cool',
    topic: 'JavaScript'
  },
  {
    _id: 'anyID2',
    title: 'Desarrollo Web',
    teacher: 'Leonidas Esteban',
    description: 'Una descripción cool',
    topic: 'HTML, CSS, JS'
  },
  {
    _id: 'anyID2',
    title: 'Fundamentos de JavaScript',
    teacher: 'Sacha Lyfszic',
    description: 'Una descripción cool',
    topic: 'JavaScript'
  }
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    }
  }
}
