var express = require('express');
var app = express();

var controller = require('./controllers/product');

controller(app);

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.listen(3000);
console.log("You are listening to port 3000");