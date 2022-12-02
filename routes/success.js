const express = require('express');
const path = require('path');

const router = express.Router();

router.post('/success', (req, res, next) => {
    res.send('<h1>Congratulations !<br> Form filled Successfully<br> You will be contacted shortly.<br>😊💻👍</h1>')
})


module.exports = router;

