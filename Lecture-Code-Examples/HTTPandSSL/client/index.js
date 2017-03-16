var https = require('https');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';   // this will bypass node's SSL certificate from
                                                // the client perspective. DO NOT PUT THIS INTO
                                                // PRODUCTION - this is just for development purposes

https.get('https://localhost:8000', function (response){
    var body = '';

    response.on('data', function(data){
        body += data;
    });

    response.on('end', function(){
        console.log(body);
    });
});
