Array.prototype.add = function(el) {
  this[this.length] = el;
  return this;
};

var express = require('express'),
    crypto = require('crypto');
    fs	= require('fs');


var app = express.createServer();
app.set('views', __dirname + '/views');
app.register('.html', require('ejs'));
app.set('view engine', 'html');

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'milfont' }));



var perfil = {
	nome: "arwen"
}

app.get('/home', function (req, res){
	res.render("home", { layout: false });

});




app.use(express.errorHandler({ showStack: true }));
app.use(express.static(__dirname));
app.listen(8001);

console.log("Servidor rodando em localhost:8001... ");

