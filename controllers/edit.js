const knex = require("../db/knex.js");
const hasher = require("../config/hasher");
const app = express();
const AWS = require('aws-sdk');
const fileUpload = require('express-fileupload');
app.use(fileUpload());
AWS.config.loadFromPath('./config.json');
const s3Bucket = new AWS.S3({ params: { Bucket: "q2insuranceproject" } });
const baseAWSURL = "https://s3.amazonaws.com/q2insuranceproject/"

module.exports = {
    index: function (req, res) {
        knex('agents').where('id', req.session.user_id)
            .then(result => {
                res.render('profile-edit', {agent:result[0]})
            })
    },
    update: function (req, res) {
        if (req.body.password && (req.body.password === req.body.confirm)) {
            
            hasher.hash(req.body).then(user => {
                knex('agents').where('id', req.session.user_id)
                .update({
                    agent_name: user.name,
                    agent_email: user.email,
                    bio: user.bio,
                    IMG_url: user.img_url,
                    location: user.location,
                    home: user.home ? user.home : false,
                    car: user.car ? user.car : false,
                    life: user.life ? user.life : false,
                    password: user.password
                }).then(() => {
                    
                        res.redirect('/profile');
                    

                })
                    .catch(() => {
                        res.redirect('/profile');
                        
                    })
            })

        } else {
            res.redirect('/profile');
            
        }
        
        
        
    }
}
