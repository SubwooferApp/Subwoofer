var express = require('express');
var routes = require('./routes');

var app = express();

app.get('/youtube/:youtube_url', routes.downloadYouTubeVideo);

app.listen(3000);