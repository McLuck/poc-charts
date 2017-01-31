var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/dashcompsis');

http.createServer(app)
.listen(3000, function(){
    console.log('escutando na 3000');
});
