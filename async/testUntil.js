var async = require('async');
var count4 = 0;
async.until(
    function() { return count4>3 },
    function(cb) {
        setTimeout(cb, 100);
    },
    function(err) {
        // 4s have passed
        console.log('1.4 err: ',err); // -> undefined
    }
);

setTimeout(function(){count4=5;}, 3000);
