const bodyParser = require('body-parser');

const express = require('express');

const path = require('path');

const adminData = require('./routes/admin');

const shopRouter = require('./routes/shop');


const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'view'));
// app.set('view', 'view');

// app.use(express.static(__dirname, 'public'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminData.routes);
app.use('/shop', shopRouter);
// app.use('/', (req, res, next) => {
//     console.log("Global calling for every routes !");
//     next();
// })

// app.use('/add-product',(req, res, next)=> {
//     console.log("The form action route !");
//     res.send('<form action="/product" method="POST"><input type="text" name="product"><button>add product</button></form>');
// });

// app.post('/product', (req, res, next)=> {
//     console.log(req.body);
//     res.redirect('/check');
// })

// app.use('/check', (req, res, next)=> {
//     console.log("This will call after filling up the form action !");
//     res.send('<h1>Product is added !<h1>');
// });

// app.use((req, res, next)=> {
//     res.status(404).send('<h1>this is an error</h1>');
// })

app.listen(3000);

// const server = http.createServer(app);

// server.listen('3000');
