let args ={
    pre:"aaa",
    nxt:"bbb"
};
var strData = JSON.stringify(args);
console.log(args);
console.log("---------------------");
console.log(strData.pre);

console.log(args.pre);

console.log(JSON.parse(strData));