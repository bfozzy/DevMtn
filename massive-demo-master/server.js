var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require("massive");
var app = express();
// var connectionString = "postgres://postgres:@localhost/MassiveJs"
var db = massive.connectSync({
  connectionString: "postgres://postgres:@localhost/MassiveJs"
})
app.use(bodyParser.json());


var port = 3000;

app.get('/injuries', function(req, res) {
  db.get_all_injuries(function(err, injuries) {
    res.status(200).json(injuries) // injuries will contain an array of injuries
  });
});

app.get("/incidents", function(req, res){
  db.get_all_incidents([req.query.by],function(err, incidents){
    res.status(200).json(incidents)
    
  })
})

app.post('/incidents', function(req, res) {
  console.log('POST sighting');

});

app.listen(port, function() {
  console.log("Started server on port", port);
});
