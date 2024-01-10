// const products = [];

const Product = require('../model/model');

module.exports.addProdForm = (req, res, next)=> {
    res.render('admin');
    console.log("The form action route !");
}

module.exports.saveProducts = (req, res, next)=> {
    const Products = new Product.products(req.body.title);
    Products.save();
    // products.push({title: req.body.title});
    // console.log(req.body);
    res.redirect('/shop/check');
}

module.exports.showProducts = (req, res, next)=> {

    // const product = adminData.product;
    res.render('shop', {prods: Product.products.fetchAll()});    
    console.log("This will call after filling up the form action !");
}
