var app = require("../server.js");
var db = app.get("db");

module.exports = {

  create: app.post("/products", function(req, res){
    db.create_product([req.body.name, req.body.desc, req.body.price, req.body.img], function(err, products){
      if (!err){
        res.status(200).json("product added")
      }
      else console.log(err);
    })
  }),

  getOne: app.get("/product/:id", function(req, res){
    db.read_product([req.params], function(err, products){
      res.status(200).json(products)
    })
  }),

  getAll: app.get("/products", function(req, res){
    db.read_products(function(err, products){
      res.status(200).json(products)
    })
  }),

  update: app.post("/product/:id", function(req, res){
    db.update_products([req.params, req.query.desc],function(err, products){
      res.status(200).json("Product updated");
    })
  }),

  delete: app.delete("/product/:id", function(req, res){
    db.delete_products([req.params], function(err, products){
      res.status(200).json("Product Deleted")
    })
  })

}
