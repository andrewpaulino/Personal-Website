const express = require('express');
const logger = require('morgan');
const expressValidator = require('express-validator');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser')
var exphbs = require('express-handlebars');
var session = require('express-session');
var flash = require('express-flash');
var Handlebars = require("express-handlebars");





var app = express();


app.set('views', path.join('views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');
  var hbs = Handlebars.create({
  // Specify helpers which are only registered on this instance.
  helpers: {

    foo: function () { return 'FOO!'; },
    bar: function () { return 'BAR!'; }
  }
});




//sessions
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));


//validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;
 
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.get('/styles.css', function(req,res,css){
    res.sendFile(path.join(__dirname +'/src/css/styles.css'));
    
})
app.get('/index.jsx', function(req,res,js){
  res.sendFile(path.join(__dirname +'/src/js/index.jsx')); 
})

app.get('/bundle.js', function(req,res,css){
  res.sendFile(path.join(__dirname +'/dist/bundle.js'));
})

app.get('/image1.jpg', function(req,res,css){
  res.sendFile(path.join(__dirname +'/src/img/image1.jpg'));  
})
app.get('/image2.jpg', function(req,res,css){
  res.sendFile(path.join(__dirname +'/src/img/image2.jpeg'));  
})
app.get('/image3.jpg', function(req,res,css){
  res.sendFile(path.join(__dirname +'/src/img/image3.jpeg'));  
})
app.get('/image4.jpg', function(req,res,css){
  res.sendFile(path.join(__dirname +'/src/img/image4.jpeg'));  
})
app.get('/image5.jpg', function(req,res,css){
  res.sendFile(path.join(__dirname +'/src/img/image5.jpeg'));  
})
app.get('/contact.jpg', function(req,res,css){
  res.sendFile(path.join(__dirname +'/src/img/contact.jpg'));  
})
app.get('/',function(req, res, html) {
  res.render('landingPage')
})
app.get('/terms',function(req,res){
  res.render('terms')

})
app.get('/privacy', function(req,res){
  res.render('policy')
})




module.exports = app;