var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var cors = requrie("cors");
var config = require("./config.js")
var app = express();

app.use(bodyParser.json()) //body parser will parse all the data in to a json format
app.use(cors(corsOptions))
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))

var corsOptions = {
  origin: "http://localhost:4000"
}




app.listen(4000, function(){
  console.log("listening on port 4000");
})
