module.exports = (function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var Test = Schema({
        name:String,
        age:Number
    },
     {
        collection: 'test'
    });

    Test.statics.test = function() {
        var that = this;
        //app.drop(function(){ that.testSave() });
        that.testFind();
    };
    Test.statics.save = function(name, age, callback) {
        var doc = this({
            name:name,
            age: age
        });
        doc.save(function(err) {
            callback();
        });
    };
    Test.statics.testSave = function() {
        var that = this;
        var names = ["fang", "yun", "jiang"];
        var count = 0;
        app.async.whilst(
            function () { return count < 100; },
            function (callback) {
                count++;
                that.save(names[Math.floor(Math.random()*3)], Math.floor(Math.random()*10000), callback);
            },
            function (err) {
                console.log(err);
                app.exit();
            }
        );
    };
    Test.statics.testFind = function() {
       this.find({name:'fang', age:{$gt:500}}).sort({age:1}).skip(0).select('-_id -__v').limit(3).exec(function(err, docs){
           console.log(docs);
           app.exit();
       });
    };
    return mongoose.model('TestSortFind', Test);
})();


