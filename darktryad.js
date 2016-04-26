var port = 6660;
var app = require('express')();

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));
app.use(require('express').static('public'));

require('http').createServer(app).listen(port,function(){
  console.log('server is running, on port', port)
});


//app.set is for configurations
//app.use is for middleware
