var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.configure(function(){
    // Serve up content from public directory
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/bower_components'));
    app.use(app.router);
    app.use(express.logger()); 
});

app.listen(port, function(){
    console.log('Express server listening on port ' + port);
});