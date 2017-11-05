var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var triviarRoutes = require('./api/routes/triviaRoutes'); //importing route
var triviarRoutes = require('./api/routes/questionsRoutes'); //importing route

triviarRoutes(app); //register the route
triviarRoutes(app)
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);














app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
