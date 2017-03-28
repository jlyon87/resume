'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();

const sidebarRouter = require('../modules/sidebar/sidebar.router.js');
const appContainerRouter = require('../modules/app-container/app-container.router.js');

router.use('/sidebar', sidebarRouter);
router.use('/app-container', appContainerRouter);

module.exports = router;
