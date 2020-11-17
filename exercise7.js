var _ = require("lodash");

var array = [ { "article": 2323,
  "quantity": 4 },
 { "article": 41,
  "quantity": 1 },
 { "article": 2323,
  "quantity": 10 },
 { "article": 655,
  "quantity": 2 },
 { "article": 655,
  "quantity": 4 }]

var worker = function(){
  return _.chain(array).groupBy('article').map((item, key) => {
            return {
                article: parseInt(key),
                total_orders: _.reduce(item, (result, value) => result += value.quantity, 0)
            };
        })
        .sortBy(item => -item.total_orders);
};

module.exports = worker;
