var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var massive = require("massive");
var app = module.exports = express();
var connectionString = "postgres://postgres@localhost/MassiveJs";
var massiveInstance = massive.connectSync({
  connectionString: connectionString
})
app.set("db", massiveInstance);
var db = app.get("db");
app.use(bodyParser.json());
var productsCtrl = require("./node_controllers/productsCtrl")







var port = 8001;
app.listen(port, function(){
  console.log("listening on port", port);
})



// const express = require('express'),
//       session = require('express-session'),
//       bodyParser = require('body-parser'),
//       massive = require('massive'),
//       passport = require('passport'),
//       LocalStrategy = require('passport-local').Strategy,
//       FacebookStrategy = require('passport-facebook').Strategy,
//       config = require('./config.js'),
//       cors = require('cors');
//
// const app = express();
// app.use(bodyParser.json());
// app.use(session({
//   resave: false,
//   saveUninitialized: false,
//   secret: config.secret
// }))
// app.use(passport.initialize());
// app.use(passport.session());
//
// app.use(express.static('./public'));
//
//
//
// /////////////
// // DATABASE //
// /////////////
// const massiveInstance = massive.connectSync({connectionString: 'postgres://localhost/sandbox'})
//
// app.set('db', massiveInstance);
// const db = app.get('db');
//
// // db.create_user(function(err, user) {
// //   if (err) console.log(err);
// //   else console.log('CREATED USER');
// //   console.log(user);
// // })
//
//
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     db.users.findOne({username: username}, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (user.password != password) { return done(null, false); }
//       return done(null, user);
//     })
//   }
// ))
//
// passport.serializeUser(function(user, done) {
//   done(null, user.userid);
// })
//
// passport.deserializeUser(function(id, done) {
//   db.getUserById([id], function(err, user) {
//     user = user[0];
//     if (err) console.log(err);
//     else console.log('RETRIEVED USER');
//     console.log(user);
//     done(null, user);
//   })
// })
//
// app.post('/auth/local', passport.authenticate('local'), function(req, res) {
//   res.status(200).send();
// });
//
// app.get('/auth/me', function(req, res) {
//   if (!req.user) return res.sendStatus(404);
//   res.status(200).send(req.user);
// })
//
// app.get('/auth/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// })
//
// app.listen(3000, function() {
//   console.log('Connected on 3000')
// })
