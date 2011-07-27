Array.prototype.add = function(el) {
  this[this.length] = el;
  return this;
};

var express = require('express'),
  crypto = require('crypto');

var app = express.createServer();
app.set('views', __dirname + '/views');
app.register('.html', require('ejs'));
app.set('view engine', 'html');

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'milfont' }));

app.get('/', function(req, res) {
  res.send("Javascript Fundamental");
});

var instrutores =[{id:10, nome:"Christiano Milfont"}];
var cursos = [];
cursos.add({
instrutores: instrutores, curso:"Javascript Fundamental"}
);

app.get('/cursos', function(req, res){ 
res.send(JSON.stringify(cursos));});
//res.send(cursos[0].instrutores[0].nome, cursos[0]);});

app.get('/instrutores', function(req, res){ 
  res.send(JSON.stringify(instrutores));
});

app.post('/cursos', function(req, res){
var objeto = req.body.objeto;
  
cursos.add(JSON.parse(objeto));
res.send(JSON.parse(objeto));
});

app.use(express.errorHandler({ showStack: true }));
app.use(express.static(__dirname));
app.listen(8001);

console.log("Servidor rodando em localhost:8001... ");

