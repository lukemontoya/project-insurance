const knex = require("../db/knex.js");


module.exports = {
  index: function(req, res) {
    knex('agents')
      .where('id', req.params.id)
        .then((agents)=>{
          knex('appointments')
            .where('agent_id', req.params.id)
            .where('status', 'unconfirmed')
            .then((appointments)=>{
              res.render('appointments', {agents:agents[0], appointments:appointments});
        });
      })
    },

    confirmed: function(req, res) {
      knex('agents')
        .where('id', req.params.id)
        .then((agents)=>{
          knex('appointments')
            .where('agent_id', req.params.id)
            .where('status', 'confirmed')
            .then((appointments)=>{
              res.render('appointments', {agents:agents[0], appointments:appointments});
          });
        })
    },

    completed: function(req, res) {
      knex('agents')
        .where('id', req.params.id)
        .then((agents)=>{
          knex('appointments')
            .where('agent_id', req.params.id)
            .where('status', 'completed')
            .then((appointments)=>{
              res.render('appointments', {agents:agents[0], appointments:appointments});
          });
        })
      }
}
