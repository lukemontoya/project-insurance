
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
        
        res.render("register", { error: req.session.error });
        
    },

    register: function (req, res) {
        let uploadData = {
            Key: req.body.email,
            Body: req.files.upload.data,
            ContentType: req.files.upload.mimetype,
            ACL: 'public-read'
        }
        s3Bucket.putObject(uploadData, function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
        })
        if (req.body.password && (req.body.password === req.body.confirm)) {
            hasher.hash(req.body).then(user => {
                knex('agents').insert({
                    agent_name: user.name,
                    agent_email: user.email,
                    bio: user.bio,
                    IMG_url: baseAWSURL + uploadData.Key,
                    location: user.location,
                    home: user.home,
                    car: user.car,
                    life: user.life,
                    password: user.password
                }).then(() => {
                    req.session.error = [];
                    req.session.save(() => {
                        res.redirect('/agent/login');
                    })
                })
                    .catch(() => {
                        req.session.error = [];
                        req.session.error.push('Invalid Registration. Please try again.');
                        req.session.save(() => {
                            res.redirect('/agent/register');
                        })
                    })
            })
        } else {
            req.session.error = [];
            req.session.error.push('Password error. Please try again.');
            req.session.save(() => {
                res.redirect('/agent/register');
            })
        }
    },

}
