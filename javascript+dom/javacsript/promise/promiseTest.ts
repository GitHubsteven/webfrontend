/**
 * Created by dell on 2018/2/27.
 */
let my1stPromise = new Promise(function(resolve, reject){
   setTimeout(()=>{
       //resolve("success");
       reject("failed!");
   },250);
});

my1stPromise.then((successMessage)=>{
    console.log("yay!" + successMessage);
},(failureMsg)=>{
    console.log("Oh,no" + failureMsg);
}).then();
