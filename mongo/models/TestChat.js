module.exports = (function() {
    var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var MessageSchema = Schema({
        from: {type:String, required: true},
        to: {type:String, required:true},
        time: {type:Date, default:Date.now},
        msg: {type:String, required:true},
        msgtype: {type:String, required:true},
        msgid: {type:Number, required:true},
        type: {type:String},
        group: {type:String}
    }, {
        collection: 'messages'
    });

    MessageSchema.statics.test = function() {
        var userid1="2", userid2="3";
        this.find({time:{$lt:Date.now()}, type:0})
        .select('-_id -__v')
        .sort({time:-1})
        .or([{to:userid1, from:userid2}, {to:userid2, from:userid1}])
        .limit(10)
        .exec(function(err, docs){
            console.log(docs);
            app.exit();
        });
    };
    return mongoose.model('TestChat', MessageSchema);
})();


