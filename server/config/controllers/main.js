var fs = require('fs');
var path = require('path');
var ejs = require('ejs');
var fileSystem = require("../../../fileSystem.js");


//Renders a partial according  to the two parameters: the topic (locates the related content in the file system), and the type (gets the correct type of files from the containing folder)
function getStuff(subject, topic , type){
    var folder = path.join(rootpath, '/client/assets/files', subject, topic, '/', type, '/');
    var results = fs.readdirSync(folder);
    var statfolder = path.join('/', 'files', subject, topic, '/', type, '/')
    console.log("Statfolder:", statfolder);
    var data = [];
    var paths = [];
    for (var i in results){
        var extension = path.extname(results[i]);
        var filepath = statfolder + results[i];
        switch(type){
            case 'videos':
                if (extension == ".mp4" || extension == ".wmv"){
                data.push(results[i].substring(0, results[i].lastIndexOf(".")));
                paths.push(filepath);
                }
                break;
            case 'presentations':
                if (extension == ".odp"){
                    data.push(results[i]);
                    paths.push(filepath);
                }
                else if (extension == ".pdf"){
                    data.push(results[i]);
                    paths.push(filepath);
                }
                break;
            case 'resources':
                if(extension == ".ejs") {
                    data.push(results[i].substring(0, results[i].lastIndexOf(".")));
                    paths.push(filepath);
                }
                break;
            // If you want in the future to render pptx here is a block to work with
            // else if (extension == ".pptx"){
            //     data.push(results[i]);
            //     paths.push(filepath);
            // }
            //     break;            
            default:
                data.push(results[i].substring(0, results[i].lastIndexOf(".")));
                paths.push(filepath);
        }
    }
    var partial = rootpath + '/client/assets/html/partials/'+  type + '.ejs';
    var compiled = ejs.compile(fs.readFileSync(partial, 'utf8'));
    var html = compiled({data:data, paths:paths, folder:statfolder, subjectName: subject, subTopic: topic});
    return html;
}

function getResource(subject, topic, resourceType, resourceId){
    var partial = rootpath + '/client/assets/files' + '/' + subject + '/' + topic + '/' + resourceType + '/' + resourceId + '.ejs';
    var compiled = ejs.compile(fs.readFileSync(partial, 'utf8'));
    var html = compiled();
    return html;
}

//renders the introduction partial
function getIntro(subject, topic){
    var template = rootpath + '/client/assets/files/' + subject + '/' + topic + '/' + topic;
    return ejs.render(template);
}


module.exports = {
//Renders dynamic content of the target folder, including introduction, videos, powerpoints, and assignments using a template for each of these partials
    renderContent: function(req, res){
        var message;
        if (req.params.topicId == "csharp"){
            message = "Welcome to C#!";    
        }
        else{
            message = "Welcome to " + req.params.topicId + "!";
        }
        
        var intro = getIntro(req.params.subject, req.params.topicId);
        var videos = getStuff(req.params.subject, req.params.topicId, "videos"); 
        var presentations = getStuff(req.params.subject, req.params.topicId, "presentations");
        var assignments = getStuff(req.params.subject, req.params.topicId, "assignments");
        var resources = getStuff(req.params.subject, req.params.topicId, "resources");
       // console.log("Rendered templates:", videos, presentations);
   
        res.render(rootpath + '/client/assets/html/content', {
            inSubject : true,
            subjectName : req.params.subject,
            subTopic : req.params.topicId,
            fileSystem : fileSystem,
            welcomeMessage: message,
        content: {
            introduction: intro,
            presentations: presentations,
            videos: videos,
            resources: resources,
            assignments: assignments
            },
        });
    },

    renderResource: function(req, res){
        var message;
        if (req.params.topicId == "csharp"){
            message = "Welcome to C#!";    
        }
        else{
            message = "Welcome to " + req.params.topicId + "!";
        }
        var resource = req.params.resource;
        res.render(rootpath + '/client/assets/html/partials/maintemplate', {
            inSubject: true,
            welcomeMessage: message,
            subjectName : req.params.subject,
            subTopic : req.params.topicId,
            fileSystem: fileSystem,
            content: {
                resource: getResource(req.params.subject, req.params.topicId, req.params.resType, req.params.resourceId)
            }
        });
    },

}
