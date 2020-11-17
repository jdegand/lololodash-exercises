var _ = require("lodash");

var array = [ { name: "mike",  income: 2563 },
      { name: "kim",   income: 1587 },
      { name: "liz",   income: 3541 },
      { name: "tom",   income: 2475 },
      { name: "bello", income: 987  },
      { name: "frank", income: 2975 } ]

var total = function(){
  return  _.reduce(array, (sum, value) => sum + value.income, 0)
}


var worker = function(){
  let size = _.size(array)
  let averageIncome = total() / size

  let underperform = []
  let overperform = []

   _.filter(array, function(item){
    if(item.income < averageIncome){
      underperform.push(item)
    }else if(item.income > averageIncome){
      overperform.push(item)
    }
  })
  return {
    "average": averageIncome,
    "underperform": _.sortBy(underperform, function(x) {return x.income;}),
    "overperform": _.sortBy(overperform, function(y){return y.income;})
  }
};

module.exports = worker;
