var request = require('superagent');
var tickets = require('./tickets.js');
//var url = 'http://localhost:3001/fang';

var arguments = process.argv.splice(2);
var index = (arguments[0]||0)*1;
index = index%tickets.length;

var url = 'http://192.168.211.108:3000/notify';
var obj = {type: "NOTIFY_TICKET_ISSUE",
    users:[1],msg:tickets[index].main_ticket
};

console.log(obj);
console.log(obj.id);
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
