const knex = require("../db/knex.js");


module.exports = {
    index: function (req, res) {
        knex('agents').where('id', req.session.user_id)
            .then(result => {
                res.render('profile-edit', {agent:result[0]})
            })
    },
}
