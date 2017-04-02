'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();

router.use(function timeLog (req, res, next) {
	// Log Actions
	console.log('Time: ', Date.now());
	next();
});

router.get('/', function(req, res) {
	res.sendFile( path.join(__dirname, '/index.html') );
});

router.get('/favicon5.ico', function(req, res) {
	res.sendFile( path.join(__dirname, '/assets/favicon5.ico') );
});

router.use( '/css', express.static( path.join(__dirname, 'css') ));
router.use( '/js', express.static( path.join(__dirname, 'js') ));
router.use( '/modules', express.static( path.join(__dirname, 'modules') ));

//Otherwise
router.get('/*', function(req, res) {
	res.sendFile( path.join(__dirname, '/index.html') );
});

module.exports = router;
