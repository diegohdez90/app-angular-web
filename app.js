var express = require('express');
var app = express();

var galeria = [
	{"id" :1,  "img" : "image-gallery-01.png"},
	{"id" :2,  "img" : "image-gallery-02.png"},
	{"id" :3,  "img" : "image-gallery-03.png"},
	{"id" :4,  "img" : "image-gallery-04.png"},
	{"id" :5,  "img" : "image-gallery-05.png"},
	{"id" :6,  "img" : "image-gallery-06.png"},
	{"id" :7,  "img" : "image-gallery-07.png"},
	];

app.get('/',function(req,res) {
	res.send('Server is up');
});

app.get('/gallery',function(req,res){
	req.accepts('application/json');
	res.format(
		{
		'application/json': function() {
				res.send(galeria);
			}
		});
});


app.listen(3000);