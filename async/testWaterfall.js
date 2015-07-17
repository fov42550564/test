var async = require('async');
async.waterfall([
    function(callback) {
        console.log(arguments);
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        console.log(arguments);
        callback(null, 'three');
    },
    function(arg1, callback) {
        console.log(arguments);
        // arg1 now equals 'three'
        callback(null, 'done');
    }
], function (err, result) {
    console.log(result);
});
