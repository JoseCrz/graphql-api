'use strict'

module.exports = (error) => {
  console.log(error)
  throw new Error('Something went wrong :(')
}