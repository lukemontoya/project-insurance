const knex = require("../db/knex.js");


module.exports = {
  index: function(req, res) {
    knex('agents')
      .then((agents)=>{
        // res.json(agents)
        res.render('agents', {agents:agents});
    });
  }
}
