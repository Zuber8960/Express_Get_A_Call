const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../utill/path');


router.get('/add-product',(req, res, next) => {
    console.log('the "add product" page!');
    res.sendFile(path.join(rootDir,'views','admin.html'));
})

router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;


