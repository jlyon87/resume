'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/angular.min.js', function(req, res) {
	res.sendFile( path.join(__dirname, '../js', 'angular.min.js') );
});

router.get('/angular-route.min.js', function(req, res) {
	res.sendFile( path.join(__dirname, '../js', 'angular-route.min.js') );
});

module.exports = router;
