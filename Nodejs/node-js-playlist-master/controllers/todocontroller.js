var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded({extended: false});
// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'do it'}];

mongoose.connect('mongodb://test:test20186061@ds121475.mlab.com:21475/testdb6061', { useNewUrlParser: true })
//Creating a schema for DB

var todoSchema = new mongoose.Schema({
    item: String
});

//Creating a todo Model

var todo = mongoose.model('todo', todoSchema);


module.exports = function(app) {
    app.get('/todo', function(req, res) {
        //get data from mongodb and pass it to the view
        todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo', {todos: data});
        })
    });

    app.post('/todo', urlencodedParser ,function(req, res) {
        todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:item', function(req, res) {
        todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
            if(err) throw err
            res.json(data)
        })
    });
};