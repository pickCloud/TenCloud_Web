var path = require('path');
var express = require('express');
var app = express();

// view engine setup
app.use('/static', express.static(path.join(__dirname, '../dist/static')));
app.set('views', path.join(__dirname, '../dist'));
//注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
app.engine('.html', require('ejs').__express);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index', {title:'paint title'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
