'use strict';
var fs = require('fs');

var logsArr = [];

function createLog(str, userid, path, method){
    var newLog = {}
    newLog.str = str;
    newLog.userid = userid;
    newLog.path = path;
    newLog.method = method;
    newLog.timeStamp = Date.now();
    return newLog;
}

function getUserLogs(userid){
    var userLogs = logsArr.filter(function (element){
        if (element.userid.toString() === userid)
            return element;
    });
    return userLogs;
}

function streamRequestForDate(date){
    var options = {
        encoding: 'utf8',
        highWaterMark: 8 * 1024  // buffer size
    }

    var filename = __dirname + '/' + date + '.txt';
    return fs.createReadStream(filename, options);
}



function pushLog(obj){
    return logsArr.push(obj);
}

var requestLogs = {
    createLog : createLog,
    logsArr: logsArr,
    pushLog: pushLog,
    getUserLogs: getUserLogs,
    streamRequestForDate: streamRequestForDate
}

module.exports = requestLogs;
