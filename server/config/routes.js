var main = require('./controllers/main.js');
var fileSystem = require("../../fileSystem.js");
module.exports = function(app){
/*
 In addition to the fileSystem array returned from fileSystem.js three keys are needed to construct
 the left navigation pane. By default for the home page set inSubject as true, subjectName as "",
 and subTopic as "".
*/
    app.get('/', function(req, res){
        // Do not change inSubject, subjectName, or subTopic
        // Default values = inSubject: true, subjectName: "", subTopic: ""
        res.render('index', {fileSystem : fileSystem, inSubject: true, subjectName: "", subTopic: ""});
    });

    app.get('/topics/:subject/:id', function(req, res){
        // Pass to main render content which generates all templates for rendering.
        main.renderContent(req, res);
    });   
};
