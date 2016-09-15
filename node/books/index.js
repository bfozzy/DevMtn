var express = require ("express");
var bodyParser = require("body-parser");
var config = require("./config.json");

var books = [
  {title: "The Great Gatsby",
  id: "0"
  }
];



//modules.exports


var app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/books", function(req, res, next){
res.status(200).json(books);
});


app.post("/books", function(req, res, next){
books.push(req.body);
res.status(200).json(books);
})


app.listen(config.port, function(){
  console.log("listening on port", config.port);
});
