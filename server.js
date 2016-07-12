var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/client/assets'));
app.use(bodyParser.json());
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(9000, function(){
    console.log("Listening on 9000");
});
