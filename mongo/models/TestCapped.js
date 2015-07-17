module.exports = (function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var Test = Schema({
        name:Number
    },
     {
        capped: { size: 1024, max: 3, autoIndexId: true },
        collection: 'test'
    });

    Test.statics.test = function() {
        var that = this;
        app.drop(function(){
            that.testSave()
        });
        //that.testFind();
    };
    Test.statics.save = function(i, callback) {
        var doc = this({
            name:i
        });
        doc.save(function(err) {
            callback();
        });
    };
    Test.statics.testSave = function() {
        var that = this;
        var count = 0;
        app.async.whilst(
            function () { return count < 10; },
            function (callback) {
                that.save(count++, callback);
            },
            function (err) {
                console.log(err);
                app.exit();
            }
        );
    };
    Test.statics.testFind = function() {
       this.find(function(err, docs){
           console.log(docs);
           app.exit();
       });
    };
    return mongoose.model('TestCapped', Test);
})();


