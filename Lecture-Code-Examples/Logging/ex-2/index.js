//With a more robust congfiguration of Bunyan logger
require('dotenv').config();  // no var needed - just imports and then runs it immediately
                            // we took the port out of the package.json file and it puts in
                            // the process.env.VARIABLE  (in our case, this will be PORT)
var express = require('express');
var routes = require('./routes');
var err500middleware = require('./middleware/500');

var loggingMiddleware = require('./middleware/logging');
var createLogger = require('./logger');

var app = express();                //var port = process.env.PORT || 3000;
                                    // if you do it this way, prod is .PORT dev is 3000
var port = process.env.PORT;       // getting info off node process object is expensive, so
                                    // want to reference it is a few times as possible.
                                    //Bunyan is an asnyc logger
var env = process.env.ENV || 'dev';
var logger = createLogger(env);


app.use(loggingMiddleware(logger));  // this returns the middleware function
app.use('/', routes);
app.use(err500middleware);

app.listen(port, function (){
    logger.info('Listening on port ' + port + '...');
});
