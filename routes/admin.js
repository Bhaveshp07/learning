const express = require('express');

const path = require('path');

const adminController = require('../controller/product');

const router = express.Router();




router.get('/add-product', adminController.addProdForm);

router.post('/add-product', adminController.saveProducts);

// module.exports = router;

exports.routes = router;

// exports.product = products;