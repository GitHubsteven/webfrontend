/**
 * Created by dell on 2017/9/21.
 */
var arr = [
    { key: 'foo', val: 'bar' },
    { key: 'hello', val: 'world' }
];


var result = arr.reduce(function(map, obj) {
    map[obj.key] = obj;
    return map;
}, {});

console.log(result["foo"]);