var main = require('./controllers/main.js');
var fileSystem = require("../../fileSystem.js");
module.exports = function(app){

    app.get('/', function(req, res){
        res.render('index', {fileSystem : fileSystem});
    });

    app.get('/topics/:subject/:id', function(req, res){
        main.renderContent(req, res);
    });   
};
