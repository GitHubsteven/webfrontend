function defaultIf(val) {
  //if(val == undefined)  x= 3; else x =val;
  var x = val || 3;
  console.log(x);
}

defaultIf(2);