const CountStream = require('./countstream.js');

const countStream = new CountStream('book');

const http = require('http');

http.get('http://www.bbc.com', function(res){
	res.pipe(countStream);
});

countStream.on('total', function(count){
	console.log("Total matches: " + count);
});
