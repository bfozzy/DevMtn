var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

var middleware = require("./controllers/middleware.js");
var mainCtrl = require("./controllers/mainCtrl.js");
app.use(middleware.addHeaders);

app.get("/name", mainCtrl.getName)
app.get("/location", mainCtrl.getLocation)
app.get("/occupations", mainCtrl.getOccupations)
app.get("/occupations/latest", mainCtrl.getOccupations[3])
app.get("/hobbies", mainCtrl.getHobbies)
app.get("/hobbies/:type", mainCtrl.getHobbies.type)







app.listen(8000, function(){
  console.log("listening on port 8000");
})
