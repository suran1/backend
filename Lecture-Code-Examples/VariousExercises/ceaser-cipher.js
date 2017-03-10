function cipher (code) {

    var arrCode = code.toUpperCase();
    var arrDecode = [];


    for (var i = 0; i < arrCode.length; i++) {

        if ((arrCode.charCodeAt(i) >= 78) && (arrCode.charCodeAt(i) <= 90)) {
            arrDecode.push(String.fromCharCode(arrCode.charCodeAt(i) - 13));
        } else if ((arrCode.charCodeAt(i) >= 65) && (arrCode.charCodeAt(i) <= 77)) {
            arrDecode.push(String.fromCharCode(arrCode.charCodeAt(i) + 13));
        } else {
            arrDecode.push(arrCode.charAt(i));
        }
    } // end for
    return arrDecode.join('');
} // end function

console.log(cipher('SERR CVMMN'));
console.log(cipher('LBH QVQ VG'));
console.log(cipher('WHAT DOES THIS SAY'));
console.log(cipher('JUNG QBRF GUVF FNL'));
