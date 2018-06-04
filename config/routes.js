//Update the name of the controller below and rename the file.
const doctor = require("../controllers/update.js")
const appointments = require("../controllers/update.js")


module.exports = function(app){

  app.get('/', insurance.index);


}


function authenticateUser(req, res, next){
  if(!req.session.doctor){
    res.redirect("/doctors/login");
  }else{
    next();
  }
}
