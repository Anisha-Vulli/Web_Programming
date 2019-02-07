var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var urlencodedParser = bodyParser.urlencoded({extended: false});
mongoose.connect('mongodb://list:list6061@ds223685.mlab.com:23685/products', { useNewUrlParser: true });
// mongoose.connection.on('error', function(error) {
//     console.error('Database connection error:', error);
// });

var productSchema = new mongoose.Schema({
    title: String,
    description: String,
    available: String,
});


var data = 
    {title:"Samsung",
    description:"mobile",
    available:"20"};

var prod = mongoose.model('lists', productSchema);

module.exports = function(app){
    app.get('/', function(req,res) {
        prod(data).save(function(err) {
            if(err) throw err;
            console.log(data);
            res.json(data);
        });
    })
}