/**
 * Created by dell on 2017/11/22.
 */
var quo = function (status) {
    return {
            get_status:function() {
                return status;
            }
    };
};

//函数里面又定义函数

var myQuo = quo("hello,world");

console.log(myQuo.get_status());

var obj = {
    status:0,
    inc: function(inc){
        this.status += typeof  inc === 'number'? inc: 0;
        return this;
    },
    get_status:function(){
        return this.status;
    }
};
console.log(obj.inc(4).get_status());

//不懂这个外括号是用来干什么的。
var myObject = (function () {

        var value = 0;
        return {
            increment: function (inc) {
                vlaue += typeof inc === 'number' ? inc : 1;
            },
            getValue: function () {
                return value;
            }
        };
    }()   //这个圆括号是用来干什么的？
);

//confused
var add_the_handles= function (nodes) {
  var i ;
    for(i =0;i<nodes.length();i+=1){
        nodes[i].onclick = function (e) {
            alert(i);
        }
    }
};




