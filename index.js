var object = require('object')
  , objzip = require('objzip')
  , isPromise = require('is-promise')
  , whenEveryItem = require('when-every-item')

module.exports =
function whenEveryKey(obj) {
  if (isPromise(obj)) return obj.then(whenEveryKey)
  var keys = object.keys(obj)
    , values = object.values(obj)
  return whenEveryItem(values).then(function(values) { return objzip(keys, values) })
}
