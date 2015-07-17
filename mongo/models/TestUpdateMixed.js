module.exports = (function() {
    var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var Test = Schema({
        name:{type:Number,default:0},
        group:Schema.Types.Mixed
    }, {
        collection: 'test'
    });

    Test.statics.test = function() {
        this.testSave();
        //this.testUpdate();
        //this.testFindUpdate();
    };
    Test.statics.testSave = function() {
        var that = this;
        var obj = this({name:0, group:{a:1, b:2}});
        var obj1 = this({name:1, group:{a:1, b:2}});
        var obj2 = this({name:2, group:{a:1, b:2}});
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
        this.update({name:{$in: [0, 1, 2]}}, {$set:{group:{a:2,b:4}}}, {multi:true, upsert:true}, function(err, num, effect){
            console.log(err);
            console.log(num);
            console.log(effect);
            app.exit();
        });
    };
    Test.statics.testFindUpdate = function() {
       this.findOne({name:0}, function(err, doc){
           doc.group.a = 8;
           doc.markModified('group');
           doc.save(function() {
               app.exit();
           });
       });
    };
    return mongoose.model('TestUpdateMixed', Test);
})();


