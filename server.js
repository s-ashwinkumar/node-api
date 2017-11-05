var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var triviaRoutes = require('./api/routes/triviaRoutes'); //importing route
var questionRoutes = require('./api/routes/questionRoutes'); //importing route
var leaderBoardRoutes = require('./api/routes/leaderBoardRoutes'); //importing route


app.use('/', triviaRoutes);
app.use('/', questionRoutes);
app.use('/', leaderBoardRoutes);
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);