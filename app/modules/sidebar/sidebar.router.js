'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/sidebar.module.js', function(req, res) {
	res.sendFile( path.join(__dirname, 'sidebar.module.js'));
});

router.get('/sidebar.component.js', function(req, res) {
	res.sendFile( path.join(__dirname, 'sidebar.component.js'));
});

router.get('/sidebar.template.html', function(req, res) {
	res.sendFile( path.join(__dirname, 'sidebar.template.html'));
});

module.exports = router;
