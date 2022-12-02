const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utill/path');

router.get('/contact-us',(req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
})

module.exports = router;

