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


var landingPage = require('./routes/landingPage');
var education = require('./routes/education')
var skills = require('./routes/skills')


var app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');
  var hbs = Handlebars.create({
  // Specify helpers which are only registered on this instance.
  helpers: {

    foo: function () { return 'FOO!'; },
    bar: function () { return 'BAR!'; }
  }
});





//body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

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


app.use('/', landingPage);


module.exports = app;