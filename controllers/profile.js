const knex = require("../db/knex.js");
const hasher = require("../config/hasher");
const sgMail = require('@sendgrid/mail');
module.exports = {
    index: function (req, res) {
        knex('agents').where('id', req.session.user_id)
            .then(result => {
                
                res.render('profile', {agent:result[0]})
            })
    },
    send: function (req, res) {
        
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: 'chris.hervois@gmail.com',
            from: 'boatguy57@gmail.com',
            subject: 'A subject goes here',
            text: 'Some really interesting text about stuff and things',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg).then(()=>{
            res.redirect('/profile');
        })
    }
}
