//Update the name of the controller below and rename the file.
const insurance = require("../controllers/insurance.js");
const agentLogin = require("../controllers/login.js");
const agentProfile = require("../controllers/profile.js");
const profileEdit = require("../controllers/edit.js");
const appts = require("../controllers/appointments.js");
const admin = require("../controllers/admin.js")
const register = require("../controllers/register.js")
const authMiddleware = (req, res, next) => req.session.user_id ? next() : res.redirect('/agent/login');
module.exports = function(app){

  app.get('/', insurance.index);
  app.get('/view/agent/:id', insurance.agent);
  app.get('/book/agent/:id', insurance.bookGet);
  app.post('/book/agent/:id', insurance.bookCreate);
  app.get('/confirmation/:id', insurance.appointment);
  app.get('/agent/login', agentLogin.index);
  app.get('/agent/register', register.index);
  app.post('/register', register.register);
  app.post('/login', agentLogin.login);

  app.use(authMiddleware);

  app.get('/admin', admin.login);
  app.get('/view/agent/appointments/:id', admin.appointmentsView);
  app.get('/confirmed_appointments/:id', admin.confirmed);
  app.get('/completed_appointments/:id', admin.completed);
  app.post('/delete/agent/:id', admin.deleteAgent);
  app.post('/delete/:id', admin.deleteAppt);

  app.get('/profile', agentProfile.index);
  app.get('/profile/edit', profileEdit.index);
  app.post('/profile/update', profileEdit.update);
  app.get('/appointments', appts.index);
  app.get('/confirmed_appointments', appts.confirmed);
  app.get('/completed_appointments', appts.completed);
  app.get('/appointments/view/:id', appts.view);
  app.post('/appointments/view/:id', appts.createComment);
  app.post('/confirm/:id', appts.sendConfirm)
  app.post('/complete/:id', appts.complete)
  app.post('/logout', agentLogin.logout);
}
