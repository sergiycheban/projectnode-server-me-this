const server = require('./uniserver');
const fs = require('fs');
const PORT = 3000;

var server = new uniserver();

server.get('menu', function (req, res) {
    let file = fs.readFileSync("../frontend/html/menu.html");
    res.html(file);
})

server.get('orders', function (req, res) {
    let file = fs.readFileSync('../frontend/html/order.html');
    res.html(file);

});