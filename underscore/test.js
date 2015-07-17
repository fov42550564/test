var _ = require('underscore');
//var a = [{a:1},{a:2}];
//a = _.without(a, {a:1});
//a = _.reject(a, function(obj){ return obj.a==1; });
//var a = null;
//a = _.map(a, function(obj) {
    //return _.pick(obj, 'b');
//});
//console.log(a);
//console.log(_.union([{a:1}], [{a:1}, {a:2}]))
//console.log(_.without([{a:1}], {a:1}))
//console.log(_.reject([{a:1}], function(obj){
    //return obj.a == 1;
//}))
/*var b = [1,2,3];
console.log(_.reject([0,1,2,4], function(obj){
    return !_.contains(b, obj);
}));*
var a = [{a:1}, {a:2}];
console.log(_.map(a, function(obj){if (obj.a==1)obj.a=3;return obj;}))
console.log(a)/**/
//var a = [1];
//console.log(_.union(a, [1,2,3]))
//console.log(a);
/*
var a = [1,2,3,4];
console.log(_.every(a, function(i) {
    return i>1;
    }))
 *
 var a = [{a:1}, {a:2}];
 console.log(_.where(a, {a:1}));
 console.log(a);*
 var a = [{a:2}, {a:1}, {a:1}];
 console.log(_.findWhere(a, {a:1}));
 console.log(a);*/
/*
   for (var i=0; i<100; i++) {
   console.log(_.random(10));
   }
   */
//console.log(_.difference([1,2,3,4,5],[1,2],[2,3]));
/*console.log(
  _.range({}, 5)
  );*/
//var a=[{a:{a:{a:new String("fangyunjiang")}}, b:2},{a:4, b:3}];
//var a = {a:1};
//console.log(_.filter(a, function(obj){return obj.a==1}));
//console.log(_.isArray(a));
//console.log(_.isObject(a));
/*
var b = _.deepClone(a);
console.log(JSON.stringify(b));
console.log(JSON.stringify(a));
*/
//console.log(_.map([{a:1,b:2},{a:2}], function(i,j,k,h){console.log(i,j,k,h);return i.a}).join(','))
/*
a={a:{a:1}}
b={b:{b:1}}
a = _.extend(a, b);
console.log(a);
*/

_.mixin({
    deepClonex: function(obj) {
        return (!obj || (typeof obj !== 'object'))?obj:
            (_.isString(obj))?String.prototype.slice.call(obj):
            (_.isDate(obj))?obj.valueOf():
            (_.isFunction(obj.clone))?obj.clone():
            (_.isArray(obj)) ? _.map(obj, function(t){return _.deepClone(t)}):
            _.mapObject(obj, function(val, key) {return _.deepClone(val)});
    }
});

var a=[{a:{a:{a:new Date(10000)}}, b:2},{a:4, b:3}];
var b = _.deepClone(a);
console.log((a[0].a.a.a.valueOf()));
console.log(JSON.stringify(a));
console.log(JSON.stringify(b));
a[1].a=5;
console.log(JSON.stringify(a));
console.log(JSON.stringify(b));












