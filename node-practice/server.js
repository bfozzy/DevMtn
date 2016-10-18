var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var config = require("./config.js");
var cors = require("cors");
var nodeCtrl = require("./controllers/nodeCtrl.js")

var app = express();
app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.get("api/forms", nodeCtrl.getThings)



app.listen(config.port, function(){
  console.log("listening to port", config.port);
});
