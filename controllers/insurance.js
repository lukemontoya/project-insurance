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
        res.render('viewAgentProfile', {agents:agents});
    });
  },

  bookGet: function(req, res) {
    knex('agents')
    .where('id', req.params.id)
      .then((agents)=>{
       // res.json(results[0])
        res.render('book', {agents:agents[0]});
    })
  },

  bookCreate: function(req, res) {
    knex('appointments')

      .insert({
        client_name: req.body.client_name,
        client_email: req.body.client_email,
        date: req.body.date,
        client_comment: req.body.client_comment,
        agent_id: req.params.id
      }).then(()=>{
        res.redirect('/');
    });
  }
}
