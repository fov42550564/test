var async = require('async');
var xx = (function() {
    var in_id = 0;
    var out_id = 0;
    function xx(k) {
        var obj = {
            _find:function(a, cb) {
                setTimeout(function(){
                    console.log('find=='+k+' '+a);
                    cb();
                }, 500);
            },
            _insert:function(b, cb) {
                setTimeout(function(){
                    console.log('insert=='+k+' '+b);
                    cb();
                }, 1000);
            },
            find:function(a) {
                var _id = in_id++;
                var that = this;
                async.until(
                    function(){return _id===out_id},
                    function(cb) {setTimeout(cb, 100)},
                    function() {
                        that._find(a, function() {
                            out_id++;
                        });
                    }
                );
            },
            insert:function(a) {
                var _id = in_id++;
                var that = this;
                async.until(
                    function(){return _id===out_id},
                    function(cb) {setTimeout(cb, 100)},
                    function() {
                        that._insert(a, function() {
                            out_id++;
                        });
                    }
                );
            }
        }

        return obj;
    }
    return xx;
})();


var arr = [];
var ii=0;
for (var i=0; i<3; i++) {
    arr.push(function(cb) {
        setTimeout(function() {
            xx(ii).find(ii)
            xx(ii).insert(ii)
            ii++;
            cb();
        }, 500);
    });
}

async.series(arr);


