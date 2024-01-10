const express = require('express');
const path = require('path');

const showController = require('../controller/product');

// const adminData = require('./admin')

const router = express.Router();

router.get('/check', showController.showProducts);

module.exports=router;