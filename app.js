const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const _ = require('lodash');
const usersJson = require('./users.json');
const uploadsJson = require('./uploads.json');
const purchasesJson = require('./car_purchases.json');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        page: 'home'
    });
});

app.get('/table/:tableName?', (req, res) => {
    const tableName = req.params.tableName;

    if (tableName === 'uploads') {
        const uploads = uploadsJson;
        res.render('uploads', {
            page: 'uploads',
            uploads: uploads
        });
    } else if (tableName === 'users') {
        const users = usersJson;
        res.render('users', {
            page: 'users',
            users: users
        });
    } else if (tableName === 'car_purchases') {
        const purchases = purchasesJson;
        res.render('purchases', {
            page: 'car purchases',
            purchases: purchases

        });
    } else {
        res.render('404', {
            page: 'Page Not Found'
        });
    }
});


app.get('*', (req, res) => {
    res.render('404', {
        page: 'Page Not Found'
    });
});



app.listen(3000, function () {
    console.log('table app listening on port 3000!');
});
