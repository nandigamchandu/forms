
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./devfractal-forms.cjs.production.min.js')
} else {
  module.exports = require('./devfractal-forms.cjs.development.js')
}
