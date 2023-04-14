var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ballRouter = require('./routes/ball');
var boardRouter = require('./routes/board');
var selectRouter=require('./routes/selector');
var balls = require("./models/balls");
var resourceRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ball', ballRouter);
app.use('/board',boardRouter);
app.use('/selector', selectRouter);
app.use('/resource', resourceRouter);

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});



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

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await balls.deleteMany();
 let instance1 = new
balls({ball_name:"Cricket", ball_shape:'small',
ball_size:10.4});
await instance1.save();
//  instance1.save( function(err,doc) {
//  if(err) return console.error(err);
 console.log("First object saved")
//  });
let instance2 = new
balls({ball_name:"rugby", ball_shape:'medium',
ball_size:20.4});
await instance2.save();
//  instance1.save( function(err,doc) {
//  if(err) return console.error(err);
 console.log("second object saved")
//  });

let instance3 = new
balls({ball_name:"volleyball", ball_shape:'large',
ball_size:30.4});
await instance3.save();
//  instance1.save( function(err,doc) {
//  if(err) return console.error(err);
 console.log("third object saved")
//  });

}
let reseed = true;
if (reseed) { recreateDB();}

module.exports = app;
