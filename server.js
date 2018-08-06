'use strict';

var express = require('express'),
  app = express(),
  port = 8000;

const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

const fs = require('fs');

app.listen(port, () => {
	console.log("server started");
});

app.get('/', (req, res) => res.send('Server running'))

app.route('/api/lessons').get((req, res) => {
	let rawdata = fs.readFileSync('../Assignment 1/lessons.json');  
	let lessons = JSON.parse(rawdata);  
	res.send(lessons);
})




