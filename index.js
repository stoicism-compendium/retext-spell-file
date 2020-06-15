'use strict'

const findUp = require('find-up')
const fs = require('fs')
const spell = require('retext-spell')

module.exports = run

function run(options) {
  // 1. If `options` has the `personal` attribute, we'll act like
  // `retext-spell`.
  if (options && options.personal) {
    return spell(options)
  }

  // 2. Try to find the personal dictionary file. If it is not found, act like
  // `retext-spell`.
  const dictionaryPath = findUp.sync('.dictionary.txt')
  if (!dictionaryPath) {
    return spell(options)
  }

  // 3. Set up `options` as an object.
  if (options) {
    // If `options` is not an object, we assume it is a function representing
    // the dictionary and move that to the `dictionary` attribute.
    if (typeof options !== 'object') {
      options = {dictionary: options}
    }
  } else {
    // Create an empty object.
    options = {}
  }

  // 4. Read the personal dictionary file and pass the contents to
  // `retext-spell`.
  options.personal = fs.readFileSync(dictionaryPath)
  return spell(options)
}
