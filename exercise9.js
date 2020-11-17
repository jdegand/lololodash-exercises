var _ = require("lodash");

let answer = { "name": "Tom",
 "login": [  1407574431,
  140753421,
  140715429 ]}

var worker = function(){
  return _.template('Hello ${name} (logins: ${logins})')({name: answer.name, logins: _.size(answer.login) })
};

module.exports = worker;
