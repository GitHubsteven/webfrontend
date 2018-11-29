let moduleUser = require("./module_useri");//引入另外一个模块js后缀可以省略
/**
 * Node.js中每个模块都是一个module对象
 * */
//使用module_user.js中的成员
console.log(moduleUser);
console.log(moduleUser.uCount);
console.log(moduleUser.uLogin);
moduleUser.uLogout();//只能使用module_user.js自己exports的成员
