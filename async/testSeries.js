var async = require('async');
async.series({
    one: function(callback){
        console.log("enter one");
        setTimeout(function(){
            console.log("enter one callback");
            callback(null, 1);
            console.log("leave one callback");
        }, 200);
    },
    two: function(callback){
        console.log("enter two");
        setTimeout(function(){
            console.log("enter two callback");
            callback(null, 2);
            console.log("leave two callback");
        }, 100);
    }
},
function(err, results) {
    console.log(results);
});
