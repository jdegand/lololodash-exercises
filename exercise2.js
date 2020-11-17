var _ = require('lodash')

var array = [{ article: 41,   quantity: 24 },
     { article: 2323, quantity: 2  },
     { article: 655,  quantity: 23 }]

var worker = function(){
  return _.sortBy(array, 'quantity').reverse()
}

module.exports = worker;
