

module.exports = function(app) {
    app.get('/', function(req, res){
        // res.send('HELLO WORLD!!!');
        res.render('index');
    });
}