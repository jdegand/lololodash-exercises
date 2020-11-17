var _ = require("lodash");

var array =   [
        { username: "tim", comment: "when you have new workshoppers?" },
        { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
        { username: "max", comment: "where have you been on friday? we missed you!" },
        { username: "max", comment: "You don't answer anymore - why?" },
        { username: "cat_lover", comment: "MORE cats!!!" },
        { username: "max", comment: "i really love your site" }
    ]




var worker = function(){
  return _.chain(array).groupBy('username').map(function(item, name){
      return  {username: name, comment_count: _.size(item)}
    }).sortBy(function(comment) {
        return -comment["comment_count"];
    });
};

module.exports = worker;
