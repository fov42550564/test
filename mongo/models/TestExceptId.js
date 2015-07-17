module.exports = (function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var Test = Schema({
        //__v: {type: Number, select: false},
        a:Number
    }, {
        collection: 'test',
        toObject: {
            transform: function (doc, ret, game) {
                delete ret.__v;
                delete ret._id;
            }
        }
    });

    Test.statics.test = function() {
        this.testSave();
        //this.testUpdate();
    };
    Test.statics.testSave = function() {
        var that = this;
        var obj = this({a:1});
        console.log(obj);
        var obj1 = this({a:2});
        mongoose.connection.db.dropCollection('test', function(err, result) {
            obj.save(function(err, doc){
                console.log(doc);
                obj1.save(function(err, doc){
                    console.log(doc);
                    that.find(function(err, docs){
                        console.log(docs);
                        app.exit();
                    });
                });
            });
        });
    };
    Test.statics.testUpdate = function() {
        this.findOneAndUpdate({a:3}, {a:1}, function(err, doc) {
            console.log(doc);
            app.exit();
        });
    };

    return mongoose.model('TestExceptId', Test);
})();


