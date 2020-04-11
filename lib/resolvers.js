'use strict'

const courses = [
  {
    _id: 'anyID',
    title: 'Programación Básica',
    teacher: 'Freddy Vega',
    description: 'Una descripción cool',
    topic: 'JavaScript'
  },
  {
    _id: 'anyID',
    title: 'Desarrollo Web',
    teacher: 'Leonidas Esteban',
    description: 'Una descripción cool',
    topic: 'HTML, CSS, JS'
  },
  {
    _id: 'anyID',
    title: 'Fundamentos de JavaScript',
    teacher: 'Sacha Lyfszic',
    description: 'Una descripción cool',
    topic: 'JavaScript'
  },
]

module.exports = {
  getCourses: () => {
    return courses
  }
}