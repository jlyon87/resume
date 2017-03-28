'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/bootstrap.min.css', function(req, res) {
	res.sendFile( path.join(__dirname, '../css', 'bootstrap.min.css') );
});

module.exports = router;
