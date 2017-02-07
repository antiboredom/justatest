var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('punch a <i>nazi</i>?<br>yes/no');
});

app.listen(3000);
