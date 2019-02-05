//import express
var express = require('express');
//Assigning all the express functionalities to a variable
var app = express();
//importing controller
var controller = require('./controllers/controller');


//Defining the controller
controller(app);
//Setting the view engine to ejs
app.set('view engine', 'ejs');

//static files

app.use(express.static('./public'));
//Listening to a particular port
app.listen(3000);