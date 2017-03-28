'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/app-container/app-container.module.js', function(req, res) {
	res.sendFile(
    path.join(__dirname,
    '../modules',
    'app-container',
    'app-container.module.js'));
});

router.get('/app-container/app-container.component.js', function(req, res) {
	res.sendFile(
    path.join(__dirname,
    '../modules',
    'app-container',
    'app-container.component.js'));
});

router.get('/app-container/app-container.template.html', function(req, res) {
	res.sendFile(
    path.join(__dirname,
    '../modules',
    'app-container',
    'app-container.template.html'));
});

module.exports = router;
