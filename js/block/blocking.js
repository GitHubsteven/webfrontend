/**
 * Created by dell on 2017/9/12.
 *
 * Blocking

 Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes.
 This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.

 In Node.js, JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-JavaScript operation, such as I/O, isn't typically referred to as blocking.
 Synchronous methods in the Node.js standard library that use libuv are the most commonly used blocking operations. Native modules may also have blocking methods.

 All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking, and accept callback functions.
 Some methods also have blocking counterparts, which have names that end with Sync.
 */
const fs = require('fs');
//const data = fs.readFileSync('./file.md');//blocks here until file is read;

fs.readFile('./file.md',(err,data)=>{
    if(err){
        throw  err;
    }
    console.log(data);
    //fs.unlink("./file.md",(unlinkErr)=>{
    //    if(unlinkErr){
    //        throw unlinkErr;
    //    }
    //})
});

fs.unlinkSync('./file.md');

//console.log(data);
//moreWork();will run after console .log
//fs.unlinkSync('./file.md');