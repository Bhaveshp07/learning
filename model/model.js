const products = [];

const path = require('path');

const fs = require('fs');

module.exports.products = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        products.push(this);
        const p = path.join(__dirname, '../', 'data', 'product.json');
        fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
        })
    }


    static fetchAll(cb) {
        const p = path.join(__dirname, '../', 'data', 'product.json');
        fs.readFile(p, (err, content)=> {
            if(!err) {
                cb(JSON.parse(content));
            }
            else {
                cb([]);
            }
        })
    }
}