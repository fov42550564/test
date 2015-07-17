module.exports = (function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var Test = Schema({
        name:String,
        age:Number,
        job:Number
    }, {
        collection: 'test'
    });

    Test.statics.test = function() {
        var that = this;
        var obj = this({
            name: "fang",
            age: 23,
            job: 0,
        });
        mongoose.connection.db.dropCollection('test', function(err, result) {
            obj.save(function(){
                that.where('name').equals('fang').where('age', 24).exec(function(err, docs){
                    console.log(docs);
                    app.exit();
                });
            });
        });
    };

    return mongoose.model('TestDoc', Test);
})();


