'use strict'

exports.plugins = [
  [
    require('remark-retext'),
    require('unified')().use({
      plugins: [
        require('retext-english'),
        require('retext-syntax-urls'),
        [require('./'), {dictionary: require('dictionary-en')}],
      ],
    }),
  ],
]
