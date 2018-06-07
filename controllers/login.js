
const knex = require("../db/knex.js");
const hasher = require("../config/hasher");
const AWS = require('aws-sdk');
const fileUpload = require('express-fileupload');
AWS.config.loadFromPath('./config.json');
const s3Bucket = new AWS.S3({ params: { Bucket: "q2insuranceproject" } });
const baseAWSURL = "https://s3.amazonaws.com/q2insuranceproject/"

module.exports = {
    index: function (req, res) {
        if (!req.session.error) {
            req.session.error = [];
        }
        if (req.session.user_id) {
            knex.select('agent_email').from('agents')
                .where('id', req.session.user_id)
                .then(result => {
                    res.render("login", { agent: result[0], error: req.session.error });
                })
        } else {
            res.render("login", { agent: undefined, error: req.session.error });
        }
    },

    

    login: function (req, res) {
        knex('agents').where('agent_email', req.body.email).then(users => {
            let user = users[0];
            hasher.check(user, req.body).then(isMatch => {
              if (isMatch && user.admin) {
                req.session.user_id = user.id;
                req.session.error = [];
                req.session.save(() => {
                    res.redirect('/admin');
                  })
              } else if (isMatch) {
                    req.session.user_id = user.id;
                    req.session.error = [];
                    req.session.save(() => {
                        res.redirect('/profile');
                    })
                } else {
                    req.session.error = [];
                    req.session.error.push('Incorrect Password. Please try again.');
                    req.session.save(() => {
                        res.redirect('/agent/login');
                    })
                }
            })
        }).catch(err => {
            req.session.error = [];
            req.session.error.push('Invalid login. Please try again.');
            req.session.save(() => {
                res.redirect('/agent/login');
            })
        })
    },

    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/agent/login');
    }

}
