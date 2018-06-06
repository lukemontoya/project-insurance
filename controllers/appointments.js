const knex = require("../db/knex.js");


module.exports = {
  index: function(req, res) {
    knex('agents')
      .where('id', req.session.user_id)
        .then((agents)=>{
          knex('appointments')
            .where('agent_id', req.session.user_id)
            .where('status', 'unconfirmed')
            .then((appointments)=>{
              res.render('appointments', {agents:agents[0], appointments:appointments});
        });
      })
    },

    confirmed: function(req, res) {
      knex('agents')
        .where('id', req.session.user_id)
        .then((agents)=>{
          knex('appointments')
            .where('agent_id', req.session.user_id)
            .where('status', 'confirmed')
            .then((appointments)=>{
              res.render('appointments', {agents:agents[0], appointments:appointments});
          });
        })
    },

    completed: function(req, res) {
      knex('agents')
        .where('id', req.session.user_id)
        .then((agents)=>{
          knex('appointments')
            .where('agent_id', req.session.user_id)
            .where('status', 'completed')
            .then((appointments)=>{
              res.render('appointments', {agents:agents[0], appointments:appointments});
          });
        })
      },

      view: function(req, res) {
        knex('appointments')
          .where('id', req.params.id)
          .then((appointments)=>{
            // res.json(appointments)
            res.render('apptConfirmPage', {appointments:appointments});
          });
      }
}
