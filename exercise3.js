var _ = require('lodash')

var array =   { Hamburg:    { population: 1.698 },
      Strasbourg: { population: 0.272 },
      Rome:       { population: 2.753 },
      Dublin:     { population: 0.528 } }

var worker = function(){
  return _.forEach(array, function(city){
    if(city.population > 1){
      city.size = 'big'
    }else if (city.population < 1 && city.population > 0.5){
      city.size = 'med'
    }else if (city.population < 0.5){
      city.size = 'small'
    }
  })
}

module.exports = worker;
