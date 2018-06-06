const knex = require("../db/knex.js");
const hasher = require("../config/hasher");

module.exports = {
    index: function (req, res) {
        knex('agents').where('id', req.session.user_id)
            .then(result => {
                
                res.render('profile', {agent:result[0]})
            })
    },
    
}
