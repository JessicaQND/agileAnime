var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var mongo = require('mongodb');

var index = require('./routes/index');
var users = require('./routes/users');
// adding passport
var passport = require('passport');
var LocalStrategy=  require('passport-local').Strategy;

var routes = require('./routes/index');

var app = express();

var port = 3000;
app.listen(port, () => {
  console.log('Server started on port ' +port)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);

//forpassport
app.use(require('express-session')({
      secret: 'CITS3403',
      resave: false,
      saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//end for passport
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', index);

//passport config
var Account = require('./model/Account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
app.use('/', index);

//Make all errors direct to a standard error message page cause it looks nicer for users
//Developers should switch back to normal error handling

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('404');
  // next(err);
  // If you need to do some development switch back to next(err), custom page
  // is nicer for users to look at
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('404');
  //res.render('error');
});

module.exports = app;
