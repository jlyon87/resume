'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();

// Log Actions
router.use(function timeLog (req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

const cssRouter = require('./routes/css-router.js');
const jsRouter = require('./routes/js-router.js');
const moduleRouter = require('./routes/module-router.js');

router.use('/css', cssRouter);
router.use('/js', jsRouter);
router.use('/modules', moduleRouter);

router.get('/', function(req, res) {
	res.sendFile( path.join(__dirname, 'index.html') );
});

router.get('/home', function(req, res) {
	res.sendFile( path.join(__dirname, 'index.html') );
});

router.get('/app.module.js', function(req, res) {
	res.sendFile( path.join(__dirname, 'app.module.js') );
});

router.get('/app.config.js', function(req, res) {
	res.sendFile( path.join(__dirname, 'app.config.js') );
});

router.get('/favicon5.ico', function(req, res) {
	res.sendFile( path.join(__dirname, 'assets', 'favicon5.ico') );
});

module.exports = router;
