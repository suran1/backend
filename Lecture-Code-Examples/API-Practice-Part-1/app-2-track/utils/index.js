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
    console.log('query keys: ', queryKeys);

    var valid = queryKeys.map(function (elem){
        if (keyInfo.expectedKeys.indexOf(elem) === -1) {
            return false;
        }
    });

    if (queryKeys.length !== keyInfo.expectedKeys.length) {
        valid.push(false)
    }

    if (valid.indexOf(false) !== -1 ) {
        console.log('Setting bad keys callback error');
        var badKeysError = new Error ('Invalid keys');
        callback(badKeysError);

    } else {
        console.log('In the ELSE of checkKeys');
        var userCredentials = {};

        for (prop in reqKeys){
            userCredentials[prop] = reqKeys[prop];
            console.log(userCredentials[prop]);
        }

        callback(null, userCredentials);
    }

}


function checkDate(userObj, callback) {
    var validDate = false;

    if (moment(userObj.currentDate, 'YYYY-MM-DD').isValid) {
        var accessDate = moment(userObj.currentDate).format('YYYY-MM-DD');
        console.log('accessDate: ', accessDate);

        var todayDate = moment().format('YYYY-MM-DD');
        console.log('todayDate:' , todayDate);

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
    console.log('in request limit check starting arr value: ', keyInfo.userAccessArray);
    var userNameIndex = keyInfo.userAccessArray.map(function(elem) {
         return elem.username; }).indexOf(userObj.username);

    console.log(userNameIndex);

    if (userNameIndex === -1){
        userObj.count = 1;
        keyInfo.userAccessArray.push(userObj);
        console.log(keyInfo.userAccessArray);
        userNameIndex = keyInfo.userAccessArray.length - 1;
        console.log(userNameIndex);
    } else {
        keyInfo.userAccessArray[userNameIndex].count += 1;
        console.log(keyInfo.userAccessArray[userNameIndex].count);
    }

    if (keyInfo.userAccessArray[userNameIndex].count > 5) {
        var accessAttemptsError = new Error ('Daily access limit exceeded');
        callback(accessAttemptsError);
    } else {
        callback(null, keyInfo.userAccessArray[userNameIndex]);
    }
}



module.exports = keyInfo;
