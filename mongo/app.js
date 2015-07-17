(function() {
    var _self;

    global._ = require('underscore');
    function MongodbMgr() {
        _self = this;
        var modelsPath = __dirname+'/models/';
        _self.async = require('async');
        _self.TestMixed = require(modelsPath+'TestMixed');
        _self.TestArray = require(modelsPath+'TestArray');
        _self.TestDocSave = require(modelsPath+'TestDocSave');
        _self.TestExceptId = require(modelsPath+'TestExceptId');
        _self.TestVersionKey = require(modelsPath+'TestVersionKey');
        _self.TestFindOneUpdate = require(modelsPath+'TestFindOneUpdate');
        _self.TestUpdate = require(modelsPath+'TestUpdate');
        _self.TestUpdateMixed = require(modelsPath+'TestUpdateMixed');
        _self.TestDoc = require(modelsPath+'TestDoc');
        _self.TestGridFS = require(modelsPath+'TestGridFS');
        _self.TestCapped = require(modelsPath+'TestCapped');
        _self.TestSortFind = require(modelsPath+'TestSortFind');
        _self.TestChat = require(modelsPath+'TestChat');
    }

    MongodbMgr.prototype.start = function(dburl, callback) {
        var mongoose = require('mongoose');
        var conn = mongoose.connect(dburl).connection;
        conn.once('open', function() {
            app.mongo = mongoose.mongo;
            app.db = conn.db;
            console.log('mongo working');
            callback();
        }).on('error', function() {
            console.log('connect error');
        });
    }
    MongodbMgr.prototype.exit = function() {
        console.log('done');
        process.exit();
    };
    MongodbMgr.prototype.drop = function(callback) {
        var mongoose = require('mongoose');
        mongoose.connection.db.dropCollection('test', function() {
            callback();
        });
    };
    MongodbMgr.prototype.test = function() {
        //_self.TestMixed.test();
        _self.TestArray.test();
        //_self.TestDocSave.test();
        //_self.TestExceptId.test();
        //_self.TestVersionKey.test();
        //_self.TestFindOneUpdate.test();
        //_self.TestUpdate.test();
       // _self.TestUpdateMixed.test();
        //_self.TestDoc.test();
        //_self.TestGridFS.test();
        //_self.TestCapped.test();
        //_self.TestSortFind.test();
        //_self.TestChat.test();
    };

    app = new MongodbMgr();
    app.start('mongodb://localhost/test', app.test);
})();


