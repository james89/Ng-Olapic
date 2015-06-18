var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT;


app.use(express.static(__dirname + '/examples'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/src', express.static(__dirname + '/src'));


var server = app.listen(8080, function() {
    console.log('Express server started on port ' + server.address().port);
});