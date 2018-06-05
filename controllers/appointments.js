const knex = require("../db/knex.js");


module.exports = {
    index: function(req, res) {
    knex('agents')
      .where('id', req.params.id)
        .then((agents)=>{
          knex('appointments')
            .where('agent_id', req.params.agent_id)
            
            .then((appointments)=>{
              res.render('confimation', {agents:agents[0], appointments:appointments});
        });
      })
  }
}
