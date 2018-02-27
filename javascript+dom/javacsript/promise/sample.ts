/**
 * Created by dell on 2018/2/27.
 */

let example1= function(requestTime){
    return new Promise((resolve, reject)=>{
        console.log("web send request!");
        let callback;
        if(requestTime < 60){
            callback = resolve("successfully!");
        }else{
            callback = reject("failed")
        }
        setTimeout(callback,Math.random()*2000 + 1000);
    })
};

example1(90).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
}).then(()=>{
    console.log("request end!");
});