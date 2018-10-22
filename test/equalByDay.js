/**
 * Created by dell on 2018/3/8.
 */
setTimeout(function(){
    console.log("hello,delay");
},0);
function loop(x){
    for(var i = 0;i<x;i++){
        console.log("rest!"+ i);
    }
}

loop(100);
