module.exports = (app, port) => {
    app.listen(port, function() {
        console.log('server running at port ' + port);
    });
    app.get('/', function(req, res) {
        res.send('<html><head><meta charset="utf-8"></head><body><h1>hello world</h1></body></html>');
    });
    app.get('/resource-1', function(req, res) {
        res.send('<html><head><meta charset="utf-8"></head><body><h1>resource one</h1></body></html>');
    });
    app.get('/resource-2', function(req, res) {
        res.send('<html><head><meta charset="utf-8"></head><body><h1>resource two</h1></body></html>');
    });
    app.get('/books', function(req, res) {
        res.marko(require('../views/books/listing.marko'));
    });
}