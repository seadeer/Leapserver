var fs = require('fs');
var path = require('path');

module.exports = {
    getVideos: function(req, res){
        var videoFolder = path.join(rootpath, '/client/assets/files/video');
        console.log("Video folder", videoFolder);
        var results = fs.readdirSync(videoFolder); 
        console.log(results);
        var data = [];
        for (var i in results){
            if (results[i].endsWith("mp4")){
                data.push(results[i].substring(0, results[i].length - 4));
            }
        }

        // res.send("here be videos...")
        res.render('videos', {data:data});
    },

    sendVideo: function(req, res){
        var video = decodeURI(req.params.id);
        var videoFile = path.join(rootpath, '/client/assets/files/video/', video);
        console.log(videoFile);
        res.sendFile(videoFile);
    }

}
