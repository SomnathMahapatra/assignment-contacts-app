var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');

// Require routes here

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersRouter2 = require('./routes/users2');


var app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

//Define routes here {versioning}
app.use('/', indexRouter);
app.use('/v1/users',usersRouter);
app.use('/v2/users', usersRouter2);
app.use('/v2/users', usersRouter);
app.use('/users', usersRouter2);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    'error': err.status
  });
});

module.exports = app;