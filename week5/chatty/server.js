var express = require ("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

var messages = [];
app.use(cors());
app.use(bodyParser.json());


app.post("/", function(req, res, next){
  console.log(req.body);
  messages.push(
  {
  username: req.body.username,
  message: req.body.message,
  time: new Date()
});
  res.status(200).set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "Origin, X-Requested-With, Content-Type, Accept",
    "X-XSS-Protection": "1; mode=block",
    "X-Frame-Options": "SAMEORIGIN",
    "Content-Security-Policy": "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
})

app.get("/", function(req, res, next){
  res.send(JSON.stringify(messages));
})
app.get("/", function(req, res, next){
  res.status(200).set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    "X-Frame-Options": "SAMEORIGIN",
    "Content-Security-Policy": "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});


app.listen(8989, function(){
console.log("listening on port 8989")
})
