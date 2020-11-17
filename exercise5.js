var _ = require('lodash')

var array = ['Test', 'Hello', 'World', 'Node', 'JavaScript']

var worker = function(){
  return _.chain(array).map((word)=> word + "chained" ).map((word)=> word.toUpperCase()).sortBy().value()
}

//chain(array).toUpper().sort()
//value() needed to make return as an array
//toUpper doesn't work with those methods

module.exports = worker;
