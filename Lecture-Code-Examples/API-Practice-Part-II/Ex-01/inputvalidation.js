'use strict';

function isAlpha(stringToCheck) {
    return (/^[a-zA-Z() ]+$/.test(stringToCheck));
}

module.exports = {
    isAlpha: isAlpha
}
