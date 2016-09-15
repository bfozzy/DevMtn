
module.exports={
  getName: function(req, res, next){
              var name = {"name": "Brad Frost"}
              res.status(200).json(name);
            },
  getLocation: function(req, res, next){
                var location = {"location": "Provo, UT"}
                res.status(200).json(location);
              },
  getOccupations: function(req, res, next){
                    var occupations = {"occupations": ["Hitman for hire", "Clergyman", "Lead singer of Daft Punk", "Professional Transporter"]}
                    res.status(200).json(occupations);
                  },
  getHobbies: function(req, res, next){
                var hobbies = {
                  [{
                    "name": "Deadly Action Sports",
                    "type": "current"
                  },
                  {
                    "name": "knitting",
                    "type": "past"
                  },
                  {
                    "name": "Video Games",
                    "type": "past"
                  },
                  {
                    "name": "AWD Burnouts",
                    "type": "current"
                  }]
                };
                res.status(200).json(hobbies);
              }
}
