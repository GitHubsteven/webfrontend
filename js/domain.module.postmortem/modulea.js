/**
 * Created by dell on 2017/9/14.
 */
const  b = require('./b');

const  c =require('./c');

//module b.js

const  d =require('domain').create();
d.on('error',()=>{
    //sileient everything
});
d.enter();

const dep =require('some-dep');
dep.method();