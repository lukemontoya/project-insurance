const knex = require("../db/knex.js");
const sgMail = require('@sendgrid/mail');

module.exports = {
  index: function (req, res) {
    knex('agents')
      .where('id', req.session.user_id)
      .then((agents) => {
        knex('appointments')
          .where('agent_id', req.session.user_id)
          .where('status', 'unconfirmed')
          .then((appointments) => {
            res.render('appointments', { agents: agents[0], appointments: appointments });
          });
      })
  },

  confirmed: function (req, res) {
    knex('agents')
      .where('id', req.session.user_id)
      .then((agents) => {
        knex('appointments')
          .where('agent_id', req.session.user_id)
          .where('status', 'confirmed')
          .then((appointments) => {
            res.render('appointments', { agents: agents[0], appointments: appointments });
          });
      })
  },

  completed: function (req, res) {
    knex('agents')
      .where('id', req.session.user_id)
      .then((agents) => {
        knex('appointments')
          .where('agent_id', req.session.user_id)
          .where('status', 'completed')
          .then((appointments) => {
            res.render('appointments', { agents: agents[0], appointments: appointments });
          });
      })
  },

  view: function (req, res) {
    knex('appointments')
      .where('id', req.params.id)
      .then((appointments) => {
        knex('comments')
          .where('appt_id', req.params.id)
          .then((comments) => {
            // res.json(appointments)
            
            res.render('apptConfirmPage', { appointments: appointments, comments: comments });
          })

      });
  },

  createComment: function (req, res) {
    knex('appointments')
      .where('id', req.params.id)
      .then((appointments) => {
        knex('comments')
          .insert({
            agent_comments: req.body.agent_comments,
            appt_id: req.params.id
          }).then(() => {
            res.redirect('/appointments/view/' + req.params.id);
          });
      })
  },
  sendConfirm: function (req, res) {
    knex.select('appointments.*', 'agents.agent_name')
      .from('appointments')
      .where('appointments.id', req.params.id)
      .join('agents', 'appointments.agent_id', 'agents.id')
      .then(data => {
        let appt = data[0];
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
          to: 'chris.hervois@gmail.com',
          from: 'admin@insurance.com',
          subject: 'Here is your appointment confirmation',
          text: `Hello, ${appt.client_name}, your appointment with ${appt.agent_name} has been confirmed for ${appt.date}. Have a nice day!`,
          // html: '<strong></strong>',
        };
        sgMail.send(msg).then(() => {
          res.redirect('/appointments');
        })
      })

      

    
  }
}
