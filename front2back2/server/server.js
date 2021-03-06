var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var massive = require("massive")
var connectionString = "postgres://postgres:@localhost/thursday";

var app = module.exports = express()

var massiveInstance = massive.connectSync({connectionString : connectionString})

app.set("db", massiveInstance)
app.use(cors())
app.use(bodyParser.json())
app.use(express.static("../public"))

var animalCtrl = require("./controllers/animalCtrl.js")

app.get("/api/animals", animalCtrl.getAllAnimals)
app.post("/api/animals", animalCtrl.createAnimal)






var port = 8001
app.listen(port, function(){
  console.log("Listening to 8001");
})
