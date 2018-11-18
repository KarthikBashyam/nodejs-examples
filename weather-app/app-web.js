const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log('Middleware  :' + new Date().toString());
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to express');
});

app.listen('4000', () => {
    console.log('Express server running on port 4000.')
});