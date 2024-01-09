const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/check', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '../', 'view', 'shop.html'))
    console.log("This will call after filling up the form action !");
});

module.exports=router;