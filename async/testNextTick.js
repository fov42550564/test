var async = require('async');

async.nextTick(function(){
    setTimeout(function() {
        console.log("===1");
    }, 1000);
});
async.nextTick(function(){
    setTimeout(function() {
        console.log("===3");
    }, 10);
});
console.log("===2");
