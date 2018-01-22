const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("index", {name: req.session.name});
  },
  createName: function(req, res){
    req.session.name = req.body.name;

    req.session.save(()=>{
      res.redirect('/')
    })
  }
}
