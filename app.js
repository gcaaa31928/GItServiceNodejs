'use strict';

var pushover = require('pushover');
var repos = pushover('/tmp/repos');
var https = require('https');
var fs = require('fs');
//repos.on('push', function (push) {
//    console.log('push ' + push.repo + '/' + push.commit
//        + ' (' + push.branch + ')'
//    );
//    push.accept();
//});
//
//repos.on('fetch', function (fetch) {
//    console.log('fetch ' + fetch.commit);
//    fetch.accept();
//});

var options = {
    key: fs.readFileSync('privatekey.pem'),
    cert: fs.readFileSync('certificate.pem')
};
var server = https.createServer(options, function (req, res) {
    res.end('Hello');
    //repos.handle(req, res);
});


server.listen(7000);