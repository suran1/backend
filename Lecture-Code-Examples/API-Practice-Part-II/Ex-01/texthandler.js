'use strict';


function toLower(str){
    return(str.toLowerCase());
}


function toUpper(str){
    return(str.toUpperCase());
}

var textHandler = {
    toUpper: toUpper,
    toLower: toLower
};

module.exports = textHandler;
