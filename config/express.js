var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.set('secret', 'lucasisrael');

app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd:'app'})
    .include('routes')
    .into(app);

module.exports = app;
