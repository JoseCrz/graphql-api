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

const queries = require('./queries')
const mutations = require('./mutations')

module.exports = {
  Query: queries,
  Mutation: mutations
}
