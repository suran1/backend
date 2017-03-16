var bunyan = require('bunyan');

module.exports = function(env) {
    return bunyan.createLogger({
        name: 'countdown',
        streams: determineStreams(env)
    });
};

// determines if dev or prod
function determineStreams(env) {
    if (env === 'prod') {
        return [
            {
                level: 'warn',
                path: './countdown-error.log'
            }
        ];
    }

    return [
        {
            level: 'debug',
            stream: process.stdout
        }
    ];
}
