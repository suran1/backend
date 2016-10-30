var a = 1, b = 2, c = 3;

(function firstFunction() {
    var b = 5, c = 6;
    console.log('Inside firstFunction: ', "a: " + a +", b:", + b + ", c:", + c);
    (function secondFunction() {
        var b = 8;
        console.log("a: " + a +", b:", + b + ", c:", + c);
        (function thirdFunction() {
            var a = 7, c = 9;
            console.log('Inside thirdFunction: ', "a: " + a +", b:", + b + ", c:", + c);
            (function fourthFunction() {
                var a = 1, c = 8;
                console.log('Inside fourthFunction: ', "a: " + a +", b:", + b + ", c:", + c);
            })();
        })();
    })();
})();