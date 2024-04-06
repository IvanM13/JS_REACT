const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

    let filePath = 'index.html';
    if (req.url !== '/') {
        filePath = req.url.substring(1)
    }
    fs.readFile(filePath, function (error, data) {

        if (error) {

            res.statusCode = 404;
            res.end('Resorse not found!');
        } else {
            res.end(data);
        }
    });

}).listen(3000, function () {
    console.log("Server started at 3000 port");
});