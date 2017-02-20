var genID = require('uuid/v4');
var users = require('../routes/users');

function getID (num) {
    // Generate a v4 UUID (random)
    if (num === 1){
        var newID = genID();
        return newID; // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
    } else {
        // only used to generate unique IDs for original 5 users the first time
        var idArr = [];
        idArr = users.map(function (elem){
             elem.id = genID();
             return elem;
        });

        return idArr;
    }
}

function checkNewUser(obj, theKeys) {
    var valid = true;

    if (typeof obj !== 'object'){
        valid = false;
        return valid;
    }


    var usersKeys = theKeys;
    var objKeys = Object.keys(obj);


    // if key length is not the same length as user key length, reject
    // immediately
    if (objKeys.length !== usersKeys.length) {
        valid = false;
        return valid;
    }


    // check that new object has the correct properties
    if (!(keysCheck(objKeys, usersKeys))){
        valid = false;
        return valid;
    } else {
        //check that all properties are strings and have a value
        for (prop in obj) {
            if (obj[prop] == '' || typeof obj[prop] !== 'string'){
                valid = false;
                return valid;
            }
        }
        return valid;
    }
}


function keysCheck (addObjKeys, expectedObjKeys){

    var sameKeys = true;
    var keyCheck = addObjKeys.map(function(elem){
        if (expectedObjKeys.indexOf(elem) !== -1) {
            return true;
        } else {
            return false;
        }
    });

    var finalKeyCheck = keyCheck.indexOf(false);

    if (finalKeyCheck !== -1){
        sameKeys = false;
    }

    return sameKeys;
}

function findUser (obj, userList) {
    console.log('obj username in findUser', obj.username);
    var isUser = userList.map(function(element) {
        return element.username }).indexOf(obj.username);

    return isUser;
}

function matchPassword(index, userList, obj) {
    console.log('userList at index password: ', userList[index].password);
    console.log('obj password: ', obj.password );
    if (userList[index].password.toString() === obj.password.toString()) {
        return true;
    } else {
        return false;
    }
}


function validateUser (obj, userList, callback){
    var index = findUser(obj, userList);
    console.log('index', index);
    console.log('userList at index: ', userList[index]);
    var isErr = false;
    if (index === -1) {
        isErr = true;
    } else {
         var result = matchPassword(index, userList, obj);
         console.log('result in validate user after match password: ', result);
         if (!result){
             isErr = true;
         } else {
             callback(null, userList[index]);
         }
    }
    if (isErr) {
        var userDoesNotExist = new Error ('user does not exist or password incorrect');
        callback(userDoesNotExist);
    }


}



function addUser (obj, keyArr, callback) {

    var result = checkNewUser(obj, keyArr);

    if (!result){
        callback(new Error('Invalid object submitted to POST'));
    } else {
        obj.id = getID(1);
        obj.created = createDate();
        callback(null, obj);
    }

    return callback;
}


function matchID (id, userList, callback) {
    var isMatch = false;

    if (id === undefined || id == '') {

        var idError = new Error('Not a valid id');
        callback(idError);

    } else {
        var matchResult = userList.filter(function(elem){
            if (elem.id.toString() === id.toString()) {
                return elem;
            }
        });

        if (matchResult.length === 0) {
            var matchError = new Error ('No match found.');
            callback(matchError);
        } else {
            callback(null, matchResult);
        }
    }
    return callback;
}



function createDate () {
    var curDate = new Date();
    var year = curDate.getFullYear();
    var month = curDate.getMonth() + 1;
    var day = curDate.getDate();

    if (month < 10 ){
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    var createdDate = year + '-' + month + '-' + day;
    return createdDate;
}

module.exports = {
                    allUserKeys: ['username', 'firstName', 'lastName', 'password', 'id', 'created'],
                    userCredKeys: ['username', 'password'],
                    getID: getID,
                    addUser: addUser,
                    checkNewUser: checkNewUser,
                    createDate: createDate,
                    matchID: matchID,
                    validateUser: validateUser
                 };
