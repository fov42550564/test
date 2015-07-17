var async = require('async');

async.parallel({
    one: function(callback){
        console.log("enter one");
        setTimeout(function(){
            console.log("enter one callback");
            callback(null, 1);
            console.log("leave one callback");
        }, 2000);
    },
    two: function(callback){
        console.log("enter two");
        setTimeout(function(){
            console.log("enter two callback");
            callback(null, 2);
            console.log("leave two callback");
        }, 1000);
    }
},
function(err, results) {
    console.log(results);
});
