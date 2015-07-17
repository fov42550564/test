module.exports = (function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var Test = Schema({
        a: [{ body: {type:String, default:'fang', validate:function(val){return /.*/.test(val);}, set:function(val){
            return val+'123';
        }},
            date:{type:Date,default:Date.now}}],
        b: {a:Number, b:Number}
    }, {
        collection: 'test'
    });

    Test.statics.test = function() {
        var that = this;
        var Test = this({
            a:[{body:'fang', date:new Date()}, {body:'123'}, {}],
            b:{a:1, b:2}
        });
        mongoose.connection.db.dropCollection('test', function(err, result) {
            Test.save(function(err){
                console.log(err);
                that.find(function(err, docs){
                    console.log(docs);
                    app.exit();
                });
            });
        });
    };

    return mongoose.model('TestMixed', Test);
})();


