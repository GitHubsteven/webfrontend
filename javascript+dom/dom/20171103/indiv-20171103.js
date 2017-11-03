/**
 * Created by dell on 2017/11/3.
 */
function square(num){
    //if define a various without var, various will be useful in global scope
    total = num *num;
    return total;
}
var total = 50;

total = square(5);
//console.log(total);
//25

var mycar = {};
mycar.make = "ford";
mycar.model = 'Mustang';
mycar.year = 1946;

//show object properties
function  showProps(obj,objName){
    var result = "";
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            result += objName + '.'+ i + '='+obj[i] +'\n';
        }
    }
    return result;
}

//var result = showProps(mycar,'mycar');
console.log(result);
