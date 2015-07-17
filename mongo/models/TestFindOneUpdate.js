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
        name:{type:String, unique:true, required: true},
        groups:{type:String, required:true}
    }, {
        collection: 'test'
    });

    Test.statics.test = function() {
        this.findOneAndUpdate({name:"12345"}, {}, {upsert:true}, function(err, doc){
            console.log(err);
            console.log(doc);
            app.exit();
        });
    };
    return mongoose.model('TestFindOneUpdate', Test);
})();


