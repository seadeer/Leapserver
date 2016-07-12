var main = require('./controllers/main.js');

module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index');
    });

    app.get('/catvideos', function(req, res){
        main.getVideos(req, res);
    })
   
};
