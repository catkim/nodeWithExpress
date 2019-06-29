var express = require('express');
var message = require('./lib/messages.js')

var app = express();

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.POST || 3030);
app.use(express.static(__dirname + '/public'));

//routes:
//homepage
app.get('/', function(req, res){
  res.render('home', {message: message.getMessage});
});

//about
app.get('/about', function(req, res){
  res.render('about');
});

//404 page
app.use(function(req, res, next){
  res.status(404);
  res.render('404');
});

//500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localehost:' + app.get('port') + '; press ctrl-c to terminate.');
});
