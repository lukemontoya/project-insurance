const express = require("express");
const app = express();
const knex = require("../db/knex.js");
const hasher = require("../config/hasher");

module.exports = {
    login: function(req, res) {
      knex('agents')
      .then((agents)=>{
        // res.json(agents)
        res.render('admin', {agents:agents});
      });
    },

    appointmentsView: function(req, res)  {
      knex('agents')
      .where('id', req.params.id)
        .then((agents)=>{
          knex('appointments')
            .where('agent_id', req.params.id)
            .then((appointments)=>{
              res.render('adminViewAppts', {agents:agents, appointments:appointments});
            })
        })
    },

    deleteAgent: function(req, res) {
      knex('agents')
      .where('id', req.params.id)
        .del()
        .then(()=>{
          res.redirect('/admin');
        })
    }
}
