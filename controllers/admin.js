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

    deleteAgent: function(req, res) {
      knex('agents')
      .where('id', req.params.id)
        .del()
        .then(()=>{
          res.redirect('/admin');
        })
    }
}
