var request = require('superagent');
//var url = 'http://localhost:3001/fang';
var url = 'http://192.168.211.108:3000/notify';
var obj = {type: "NOTIFY_WORK_NOTICE", users:[1, 2, 3], msg:{title:"hello", msg:"hehe", module:'passNumber', time:Date.now()}};

request.post(url)
.send(JSON.stringify(obj))
.set('Accept', 'application/json')
//.set('Content-Type', 'text/plain')
.type('text/plain')
.end(function(err, res){
    console.log(res.text);
    console.log(res.body);
    if (res.ok) {
        console.log('yay got ' + JSON.stringify(res.body));
    } else {
        console.log('Oh no! error ' + res.text);
    }
});
