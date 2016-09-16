var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var config = require("./config.json");
var cors = require("cors");
var profileCtrl = require("./controllers/profileCtrl.js");
var userCtrl = require("./controllers/userCtrl.js");

var app = express();
app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));



app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get("/test", function(req, res, next){
  res.status(200).json({hello: "world"});
})
app.post("/login", userCtrl.login);




app.listen(config.port, function(){
  console.log("listening to port", config.port);
})
