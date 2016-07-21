var main = require('./controllers/main.js');
var fileSystem = require("../../fileSystem.js");
module.exports = function(app){
    app.get('/', function(req, res){
        console.log(fileSystem)
        res.render('index', {fileSystem : fileSystem});
    });
    app.get('/csharp/:topic', function(req, res){
        // var folderContent = new contentFromFile("c#");
        res.render('content', folderContent);       
    });
    app.get('/azure/:topic', function(req, res){
        res.render('content', {
            welcomeMessage: "Welcome to Azure !",
            content: {
                introduction: {
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
                },
                presentations: {},
                videos: {},
                assignments: {}
            }
        });       
    });
    app.get('/algorithms/:topic', function(req, res){
        res.render('content', {
            welcomeMessage: "Welcome to Algorithms !",
            content: {
                introduction: {
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
                },
                presentations: {
                    ppt: [0,1,2,3,4]
                },
                videos: {
                    videos: [0,1,2,3,4]
                },
                assignments: {
                    homework: [0,1,2,3,4]
                }   
            }
        });       
    });
    app.get('/visualstudio/:topic', function(req, res){
        res.render('content', {
            welcomeMessage: "Welcome to Visual Studio!",
            content: {
                introduction: {
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
                },
                presentations: {},
                videos: {},
                assignments: {}
            }
        });       
    });
    app.get('/pi/:topic', function(req, res){
        res.render('content', {
            welcomeMessage: "Welcome to Pi!",
            content: {
                introduction: {
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip "
                },
                presentations: {},
                videos: {},
                assignments: {}
            }
        });       
    });

    app.get('/topics/:id', function(req, res){
        main.renderContent(req, res);
    })

   
};
