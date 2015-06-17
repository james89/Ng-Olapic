var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/examples/index.html'));
});

var server = app.listen(8080, function() {
    console.log('Express server started on port ' + server.address().port);
});