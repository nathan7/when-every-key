var object = require('object')
  , objzip = require('objzip')
  , whenEveryItem = require('when-every-item')

module.exports =
function whenEveryKey(obj) {
  return whenEveryItem(object.values(obj))
    .then(function(values) {
      return objzip(object.keys(obj), values)
    })
}
