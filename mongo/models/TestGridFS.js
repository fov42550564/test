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
        //this.testWrite();
        this.testRead();
    };
    Test.statics.testWrite = function() {
        var mongo = app.mongo;
        var db = app.db;
        var gridStore = new mongo.GridStore(db, new mongo.ObjectID(), 'w', {root: 'fs'});
        gridStore.writeFile('app.js', function(err, fileInfo) {
            console.log(err);
            console.log(fileInfo._id);
        });
    };
    Test.statics.testRead = function() {
        var mongo = app.mongo;
        var db = app.db;
        var readGrid = new mongo.GridStore(db, '550b71d11d34cd0409a4b70e', 'r');
        readGrid.open(function(err, gridStore) {
            readGrid.read(function(err, data) {
                console.log(data);
                app.exit();
            });
        });
    };

    return mongoose.model('TestGridFS', Test);
})();


