var fs = require("fs");
var path = require('path');

var folder = path.join(rootpath, '/client/assets/files');
var results = fs.readdirSync(folder);

    var data = [];
    for (var i in results){
        if(results[i][0] != '.'){        
            var name = results[i].toString();
            var folder = path.join(rootpath, '/client/assets/files/'+name);
            var topics = fs.readdirSync(folder);
            var obj = {};
            obj[name] = topics;           
            data.push(obj);
        }
    }

    //console.log(data)
module.exports = data;


