module.exports = (function() {
    var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var Test = Schema({
        name:String,
        group:Number
    }, {
        collection: 'test'
    });

    Test.statics.test = function() {
        var that = this;
        var obj = this({name:"123", group:123});
        var obj1 = this({name:"12", group:12});
        var obj2 = this({name:"1", group:1});
        mongoose.connection.db.dropCollection('test', function(err, result) {
            obj.save(function(){
                obj1.save(function(){
                    obj2.save(function(){
                        that.testUpdate();
                    });
                });
            });
        });
    };
    Test.statics.testUpdate = function() {
        this.update({name:{$in:[123, 12]}}, {$inc:{group:1}}, {multi:true}, function(err, num, effect){
            console.log(err);
            console.log(num);
            console.log(effect);
            app.exit();
        });
    };
    return mongoose.model('TestUpdate', Test);
})();


