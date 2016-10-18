var forms = require("../models/forms")
var controller = {
  getThings: function(req, res){
    res.status(200).json(forms)
  }
}
module.exprots = controller;
