var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var moviesController = require("./controllers/movies_controller");
var app = express();
app.get("/movies", moviesController.index);



app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));

app.get("/movies/:id", moviesController.show);
app.post("/movies", moviesController.create);
app.put("/movies/:id", moviesController.update);
app.delete("/movies/:id", moviesController.destroy);
app.get("wishlist", function(req, res, next){
if (!req.session.wishlist){
  req.session.wishlist = [];
}
  res.status(200).json(req.session.wishlist);
});
app.post("/wishlist", function(req, res, next){
  if (!req.session.wishlist){
    req.session.wishlist = [];
  }
  req.session.wishlist.push(req.body);
  res.sendStatus(204);
})
app.listen(3000, function(){
  console.log("listening on port 3000");
})
