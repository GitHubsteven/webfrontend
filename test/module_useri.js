let userCount = 998;
let userLogin = function () {
  console.log("User login...");
};

let userLogout = function () {
  console.log("User logout...");
};

//向外公开自己内部的文件
exports.uCount = userCount;
exports.uLogin = userLogin;
exports.uLogout = userLogout;
