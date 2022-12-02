const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app=express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

const adminRouter = require('./routes/admin');
const homeRouter = require('./routes/home');
const contactRouter = require('./routes/contact');
const successRouter = require('./routes/success');
const { dirname } = require('path');

app.use('/admin', adminRouter);

app.use(homeRouter);

app.use(contactRouter);

app.use(successRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(7000);

