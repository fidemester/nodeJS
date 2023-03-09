const path = require('path')
const express = require('express')
const adminData = require('./admin')
const shopController = require('../controllers/shop')
const router = express.Router();

router.get('/',shopController.getIndex);

router.get('/products', shopController.getProducts );

router.get('/products/:productId',shopController.getProduct )

router.get('/card', shopController.getCard );

router.post('/card', shopController.postCard )

router.get('/orders', shopController.getOrders );

router.get('/checkout', shopController.getCheckout);


  module.exports = router;