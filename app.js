var session = require('express-session');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var makeRoomRouter = require('./routes/makeRoom');
var enterRoomRouter = require('./routes/enterRoom');

var app = express();

// Heroku
var http = require('http'); //httpモジュール呼び出し
var server = http.createServer(function (request, response) {
  // リクエストを受けると以下のレスポンスを送信する
  response.writeHead(200, { 'Content-Type': 'text/plain' }); //レスポンスヘッダーに書き込み
  response.write('Hello World\n'); // レスポンスボディに「Hello World」を書き込み
  response.end(); // レスポンス送信を完了する
});
server.listen(process.env.PORT || 8080); //8080番ポートで待ち受け

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let ses_opt = {
  secret: 'my secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 1000 },
};
app.use(session(ses_opt));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/makeRoom', makeRoomRouter);
app.use('/enterRoom', enterRoomRouter);

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
  res.render('error');
});

module.exports = app;
