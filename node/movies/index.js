var express = require("express");
var bodyParser = require("body-parser");

var moviesController = require("./controllers/movies_controller");
var app = express();
app.get("/movies", moviesController.index);



app.use(bodyParser.json());


app.get("/movies/:id", moviesController.show);
app.post("/movies", moviesController.create);
app.put("/movies/:id", moviesController.update);
app.delete("/movies/:id", moviesController.destroy);

app.listen(3000, function(){
  console.log("listening on port 3000");
})
