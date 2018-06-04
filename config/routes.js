//Update the name of the controller below and rename the file.
const insurance = require("../controllers/insurance.js")


module.exports = function(app){

  app.get('/', insurance.index);


}


function authenticateUser(req, res, next){
  if(!req.session.doctor){
    res.redirect("/agents/login");
  }else{
    next();
  }
}
