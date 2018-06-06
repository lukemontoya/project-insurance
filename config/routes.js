//Update the name of the controller below and rename the file.
const insurance = require("../controllers/insurance.js");
const agentLogin = require("../controllers/login.js");
const agentProfile = require("../controllers/profile.js");
const profileEdit = require("../controllers/edit.js");
const appts = require("../controllers/appointments.js");
const authMiddleware = (req, res, next) => req.session.user_id ? next() : res.redirect('/agent/login');
module.exports = function(app){

  app.get('/', insurance.index);
  app.get('/view/agent/:id', insurance.agent);
  app.get('/book/agent/:id', insurance.bookGet);
  app.post('/book/agent/:id', insurance.bookCreate);
  app.get('/confirmation/:id', insurance.appointment);
  app.get('/agent/login', agentLogin.index);
  app.post('/register', agentLogin.register);
  app.post('/login', agentLogin.login);
  app.use(authMiddleware);

  app.post('/sendmessage', agentProfile.send)

  app.get('/profile', agentProfile.index);
  app.get('/profile/edit', profileEdit.index);
  app.post('/profile/update', profileEdit.update);
  app.get('/appointments', appts.index);
  app.get('/confirmed_appointments', appts.confirmed);
  app.get('/completed_appointments', appts.completed);
  app.get('/appointments/view/:id', appts.view);
  app.post('/appointments/view/:id', appts.createComment);

  app.post('/logout', agentLogin.logout);
}

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);
