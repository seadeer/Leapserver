var fs = require("fs");
var path = require('path');
/*
 Output from fileSystem.js is necessary for left navigation pane construction.

 fileSystem.js returns an array of objects which
 keys are the folder names (subjects) and the values are
 arrays of the subfolders names (topics). The array fileSystem
 returns is named data and can be console logged for
 debugging purposes. 

 ex. 
This is your folder structure where (+) means Folder and (-) mean file

 (+) programming_languages 
   (+) Cplusplus
     (+) videos
     (+) assignments
     (+) presentations
     (-) cplusplus.ejs
   (+) Csharp
     (+) videos
     (+) assignments
     (+) presentations
     (-) csharp.ejs
(+) data_structures 
   (+) trees
     (+) videos
     (+) assignments
     (+) presentations
     (-) trees.ejs
   (+) graphs
     (+) videos
     (+) assignments
     (+) presentations
     (-) graphs.ejs

If running properly fileSystem.js will output the following
to be used in contructing the left navagation pane.
 data = [
     "programming_languages" : ["Cplusplus", "Csharp"],
     "data_structures" : ["trees", "graphs"]
 ]
*/


// root folder to host all content
var folder = path.join(rootpath, '/client/assets/files');
// Get array of all upper level folders (subjects)
var subjects = fs.readdirSync(folder);

// Let subjectName be the key in an object that contains the array
// of its associated topics.
// When constructed push to data array

    var data = [];
    for (var i in subjects){
        if(subjects[i][0] != '.'){        
            var subjectName = subjects[i].toString();
            var folder = path.join(rootpath, '/client/assets/files/'+subjectName);
            var topics = fs.readdirSync(folder);
            var obj = {};
            obj[subjectName] = topics;           
            data.push(obj);
        }
    }

    //console.log(data)
module.exports = data;


