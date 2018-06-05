const knex = require("../db/knex.js");


module.exports = {
    index: function (req, res) {
        knex('agents').where('id', req.session.user_id)
            .then(result => {
                res.render('profile-edit', {agent:result[0]})
            })
    },
    update: function (req, res) {
        
        
        
        knex('agents').where('id', req.session.user_id)
            .update({
                agent_name:req.body.name,
                agent_email:req.body.email,
                bio:req.body.bio,
                IMG_url:req.body.img_url,
                location:req.body.location,
                home:req.body.home ? req.body.home : false,
                car: req.body.car ? req.body.car : false,
                life: req.body.life ? req.body.life : false,
                password:req.body.password
            }).then(()=>{
                res.redirect('/profile')
            })
    }
}
