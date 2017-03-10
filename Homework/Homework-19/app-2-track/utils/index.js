moment = require('moment');

var keyInfo = {
                userAccessArray: [],
                expectedKeys: ['username', 'currentDate'],
                checkKeys: checkKeys,
                requestLimitCheck: requestLimitCheck,
                checkDate: checkDate
              }

function checkKeys (reqKeys, callback) {
    var queryKeys = Object.keys(reqKeys);

    var valid = queryKeys.map(function (elem){
        if (keyInfo.expectedKeys.indexOf(elem) === -1) {
            return false;
        }
    });

    if (queryKeys.length !== keyInfo.expectedKeys.length) {
        valid.push(false)
    }

    if (valid.indexOf(false) !== -1 ) {
        var badKeysError = new Error ('Invalid keys');
        callback(badKeysError);

    } else {
        var userCredentials = {};

        for (prop in reqKeys){
            userCredentials[prop] = reqKeys[prop];
        }

        callback(null, userCredentials);
    }

}


function checkDate(userObj, callback) {
    var validDate = false;

    if (moment(userObj.currentDate, 'YYYY-MM-DD').isValid) {
        var accessDate = moment(userObj.currentDate).format('YYYY-MM-DD');
        var todayDate = moment().format('YYYY-MM-DD');

        if (moment(accessDate).isSame(todayDate)){
            validDate = true;
        }
    }

    if (!validDate){
        var invalidDateError = new Error ('Invalid date or date format');
        callback(invalidDateError);
    } else {
        callback(null, validDate);
    }

}


function requestLimitCheck (userObj, callback) {
    var userNameIndex = keyInfo.userAccessArray.map(function(elem) {
         return elem.username; }).indexOf(userObj.username);


    if (userNameIndex === -1){
        userObj.count = 1;
        keyInfo.userAccessArray.push(userObj);
        userNameIndex = keyInfo.userAccessArray.length - 1;

    } else {
        keyInfo.userAccessArray[userNameIndex].count += 1;
    }

    if (keyInfo.userAccessArray[userNameIndex].count > 5) {
        var accessAttemptsError = new Error ('Daily access limit exceeded');
        callback(accessAttemptsError);
    } else {
        callback(null, keyInfo.userAccessArray[userNameIndex]);
    }
}



module.exports = keyInfo;
