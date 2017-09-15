/**
 * jquery js lib test
 *
 * @authore rongbin.xie on 2017/9/15.
 */
//var $ = require('jquery');

require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);

});