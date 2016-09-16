var us = {
  name: "dm13",
  count: "29",
  ethnicity: "diverse",
  age: "25",
  men: "26",
  women: "3"
}

module.exports = {

  getData: function(req, res){
    res.json(us);
  }
}
