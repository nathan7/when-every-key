var object = require('object')
  , objzip = require('objzip')
  , isPromise = require('is-promise')
  , whenEveryItem = require('when-every-item')

module.exports =
function whenEveryKey(obj) {
  if (isPromise(obj)) return obj.then(whenEveryKey)
  return whenEveryItem(object.values(obj))
    .then(function(values) {
      return objzip(object.keys(obj), values)
    })
}
