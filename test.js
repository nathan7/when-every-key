var promize = require('crazy-promise').from
  , objzip = require('objzip')
  , assert = require('assert')
  , whenEveryItem = require('./')
  , keys = []
  , values = []
  , result
  , n = 9000

for (var i = 0; i < n; i++) keys.push(Math.random())
for (var i = 0; i < n; i++) values.push(Math.random())

whenEveryItem(objzip(keys, values.map(maybePromize))).then(function(_result) { result = _result })
process.on('exit', function() { assert.deepEqual(result, objzip(keys, values)) })

function maybePromize(value) {
  return Math.random() < 0.5
        ? value
        : promize(value)
}
