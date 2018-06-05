//Update the name of the controller below and rename the file.
const insurance = require("../controllers/insurance.js");
const agentLogin = require("../controllers/login.js");
const agentProfile = require("../controllers/profile.js");
const authMiddleware = (req, res, next) => req.session.user_id ? next() : res.redirect('/agent/login');
module.exports = function(app){

  app.get('/', insurance.index);
  app.get('/view/agent/:id', insurance.agent);
  app.get('/agent/login', agentLogin.index);
  app.post('/register', agentLogin.register)
  app.post('/login', agentLogin.login)
  app.use(authMiddleware);
  app.get('/profile', agentProfile.index)

}
