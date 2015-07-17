module.exports = (function() {
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var Test = Schema({
        name:String,
        groups:Array
    },
     {
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
            groups:[{users:[1,2,3], name:"123"}, {users:[1], name:"1234"}]
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
        this.findOne({name:"fang"}, function(err, doc) {
            var groups = doc.groups;
            _.map(groups, function(obj){
                console.log(obj.name);
                console.log(obj.users);
            });
            _.map(groups, function(obj){
                if (obj.name == '123') {
                    if (obj.users.length != 5) {
                        obj.users = [1,2,3,4,5];
                    } else {
                        obj.users = [1,2,3];
                    }
                }
                return obj;
            });

            doc.markModified('groups');
            doc.save(function(err, ret) {
                _.map(ret.groups, function(obj){
                    console.log(obj.name);
                    console.log(obj.users);
                });
                app.exit();
            });
        });
    };
    return mongoose.model('TestDocSave', Test);
})();


