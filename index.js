var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello Kakashi. It is new Jenkins " }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World, Kakashi" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, Kakashi Testing CICD Jenkins!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
