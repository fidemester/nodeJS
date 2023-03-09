const Product = require('../models/product')
const Card = require('../models/card')

 exports.getProducts = (req, res, next) => {
  Product.fetchAll(products =>{;
      console.log('admin',products)
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
      });
      });
    };

    exports.getProduct = (req,res, next) =>{
      const prodId = req.params.productId;
      Product.findById(prodId, product =>{
        res.render('shop/product-detail', {
          product: product, 
          pageTitle: product.title,
          path: '/products'
        });
      })
  
    }

    exports.getIndex = (req,res,next) =>{
      Product.fetchAll(products =>{;
        res.render('shop/index', {
          prods: products,
          pageTitle: 'Shop',
          path: '',
        });
        });
    };

    exports.getCard = (req,res, next) =>{
      res.render('shop/card', {
        path: "/card",
        pageTitle: 'Your Card'
      })
    }

    exports.postCard = (req,res, next) =>{
      const prodId = req.body.productId;
      console.log(prodId);
      Product.findById(prodId, (product) =>{
        Card.addProduct(prodId, product.price)

      })
      res.redirect('/card')
    }

    exports.getOrders = (req,res, next) =>{
      res.render('shop/orders', {
        path: "/card",
        pageTitle: 'Your Orders'
      })
    }

    exports.getCheckout = (req,res, next) =>{
      res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'

      })
    }