const knex = require("../db/knex.js");


module.exports = {
  index: function(req, res) {
    knex('agents')
      .then((agents)=>{
        // res.json(agents)
        res.render('agents', {agents:agents});
    });
  },

  agent: function(req, res) {
    knex('agents')
      .where('id', req.params.id)
      .then((agents)=>{
        // res.json(agents)
        res.render('profiles', {agents:agents[0]});
      });
  }
}
