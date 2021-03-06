function getAndPrintHTML () {

    var https = require('https');
    var data = '';

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

    // notice that https.get takes a callback with one parameter -
    // response, which is a Stream that represents the HTTP response
    https.get(requestOptions, function(response) {
        
        // Set the encoding to be utf8. 
        response.setEncoding('UTF8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function(chunk) {
        data += (`${chunk.toString()}`);
        });

        response.on('end',function() {
        console.log(data);
        });

        response.on('error', function(err) {
        console.log(err.stack);
        });
    });
}
getAndPrintHTML();