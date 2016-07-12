var fs = require('fs');
var path = require('path');

module.exports = {
    getVideos: function(req, res){
        var videoFolder = path.join(rootpath, '/client/assets/files/video');
        console.log("Video folder", videoFolder);
        var data = fs.readdirSync(videoFolder); 
        console.log(data);

        // res.send("here be videos...")
        res.render('videos', {data:data});
    }

}
