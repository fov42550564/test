module.exports = (function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var Test = Schema({
        a: [{body:String, age:Number}],
        b:String
    },
     {
        collection: 'test'
    });

    Test.statics.test = function() {
        this.testSave();
        //this.testPush();
        //this.testPushEx();
        //this.testPull();
    };
    Test.statics.testSave = function() {
        var that = this;
        var mixed = this({
            a:[{body:"123", age:12}],
            b:'123'
        });
        mongoose.connection.db.dropCollection('test', function(err, result) {
            mixed.save(function(err, doc, num){
                console.log(err, doc, num);
                that.find(function(err, docs){
                    console.log(docs);
                    app.exit();
                });
            });
        });
    };
    Test.statics.testPush = function() {
        this.findOneAndUpdate({b:'123'}, {$addToSet:{a:{body:"123", age:12}}}, function(err, docs){
            console.log(err);
            console.log(docs);
            app.exit();
        });
    };
    Test.statics.testPushEx = function() {
        this.findOne({b:'123'}, function(err, doc){
            var flag = false;
            var arr = doc.a;
            for (var i in arr) {
                if (arr[i].body == "1234") {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                doc.a.push({body:"1234", age:12});
                doc.save(function(err, doc){
                    console.log(doc);
                    app.exit();
                });
            } else {
                console.log("not save");
                console.log(doc);
                app.exit();
            }
        });
    };
    Test.statics.testPull = function() {
        this.findOneAndUpdate({b:'123'}, {$pull:{a:{body:"123", age:12}}}, function(err, docs){
            console.log(err);
            console.log(docs);
            app.exit();
        });
    };

    return mongoose.model('TestArray', Test);
})();


