var express = require('express');
var app = express();

app.set('port', 3000);

app.get('/', function(req, res) {
  return res.status(200).send('Hello from docker!');
});

app.listen(app.get('port'), function() {
  console.log('App running on port:', app.get('port'));
});
