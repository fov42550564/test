module.exports = (function() {
    /*
     * $pull
     * $pullAll
     * $pop
     * $set of an entire array
     * $push
     * $pushAll
     * $addToSet
     * will incease versionkey
     */
    var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var Test = Schema({
        name:String,
        groups:Array
    },
    {
        //versionKey: false,
        versionKey: '__myversion',
        collection: 'test'
    });

    Test.statics.test = function() {
        //this.testSave();
        this.testModify();
    };
    Test.statics.testSave = function() {
        var that = this;
        var doc = this({
            name:"fang",
            groups:[1, 2, 3]
        });
        mongoose.connection.db.dropCollection('test', function(err, result) {
            doc.save(function(err){
                console.log(err);
                that.find(function(err, docs){
                    console.log(docs);
                    app.exit();
                });
            });
        });
    };
    Test.statics.testModify = function() {
        var that = this;
        this.findOne({name:"fang"}, function(err, doc) {
            doc.groups.pull(2) ;
     //       doc.markModified('groups');
            doc.save(function(err, ret) {
                console.log(ret);
                that.find(function(err, docs){
                    console.log(docs);
                    app.exit();
                });
            });
        });
    };
    return mongoose.model('TestVersionKey', Test);
})();


