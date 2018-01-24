/**
 * Created by dell on 2017/11/23.
 */


function method_test1() {
    var numbers = [];
    for (var i = 0; i < 100000000; i++) {
        numbers.push(i);
    }

    var joinByPlus = function (arr) {
        var result = '';
        for (var k = 0; k < arr.length; k++) {
            result = result + arr[k] + ',';
        }
        //console.log(result);
    };

    var joinByMethod = function (arr) {
        var result = '' + arr.join();
        //console.log(result);
    };

    function getRunTime(x) {
        var start = new Date();
        var startLong = start.getMilliseconds();
        Object.apply(x);
        var end = new Date();
        var endLong = end.getMilliseconds();
        console.log(endLong - startLong)
    }

    console.log("join by plus ");
    getRunTime(joinByPlus(numbers));

    console.log("join by method");
    getRunTime(joinByMethod(numbers));
}

function method_test1(){
    var add = function (a, b) {
        return a + b;
    };

    var myObject = {
        value: 0,
        increment: function (inc) {
            this.value += typeof  inc === 'number' ? inc : 0;
        }
    };

    myObject.double = function () {
        //var that = this;
        var helper = function () {
            this.value = add(this.value,this.value);
        };
        helper();
    };
    var value =2;
    myObject.increment(3);
    myObject.double();
    console.log(myObject.value);
    console.log("value in global : {}",this.value);
}

//Function.prototype.method= function(name,func){
//    this.prototype[name] = func;
//    return this;
//};

//Object.method('ppx',function(para){
//    console.log(para);
//});

Object.prototype.ppx = function(){
    console.log('i am ppx');
};

var x = 3;
x.ppx;
//x.ppx(4);
