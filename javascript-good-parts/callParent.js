/**
 * Created by dell on 2018/1/25.
 */
function parent(resp){
    if(resp){
        console.log(resp)
    }else{
        resp = {a:"a"};
        parent(resp);
    }
}

var resp = {b:"b"};
parent(resp);