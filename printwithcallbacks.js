function getHTML (options, callback) {

    /* Add your code here */
    var https = require('https');
    var data = '';

    // notice that https.get takes a callback with one parameter -
    // response, which is a Stream that represents the HTTP response
    https.get(options, function(response) {
        
        // Set the encoding to be utf8. 
        response.setEncoding('UTF8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function(chunk) {
        data += (`${chunk}`);
        });

        response.on('end',function() {
            callback(data);
        });

        response.on('error', function(err) {
        console.log(err.stack);
        });
    });
}
  
function printHTML (html) {
console.log(html);
}
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };
  
  getHTML(requestOptions,printHTML);