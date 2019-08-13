var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var cors = require('cors');
var passport = require('passport');
var messages = require('express-messages')
var flash = require('connect-flash');
var dotenv = require('dotenv');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var privateRouter = require('./routes/members');

var app = express();

mongoose.connect('mongodb://localhost/userauth-passport', { useNewUrlParser: true })
  .then(() => console.log('Connected to mongodb...'))
  .catch(err => console.log('Connection error', err.message));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

dotenv.config();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Handle sessions
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}))

// Passport
app.use(passport.initialize());
app.use(passport.session());

//Validator will be Joi


// Flash messages 
app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = messages(req, res);
  next();
});

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', privateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
