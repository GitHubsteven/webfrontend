var FileUrlObj = /** @class */ (function () {
    function FileUrlObj(name, url) {
        this.name = name;
        this.url = url;
        this.fileName = name;
        this.getDwnUrl = url;
    }
    return FileUrlObj;
}());
var dwnFileList = [];
dwnFileList.push(new FileUrlObj("A", function (port, storeArea, option) {
    console.log("port:{},storeArea:{},option:{}", port, storeArea, option);
    if (!option)
        option = {};
    if (port == 1 && storeArea === 'jp' && !option.isUsa)
        return "wms/jp/a";
    if (option.isUsa)
        return 'wms/us/a';
    return "wms/a";
}));
dwnFileList.push(new FileUrlObj("B", function (port, storeArea, option) {
    console.log("port:{},storeArea:{},option:{}", port, storeArea, option);
    if (!option)
        option = {};
    if (port == 1 && storeArea === 'jp' && !option.isUsa)
        return "wms/jp/B";
    if (option.isUsa)
        return 'wms/us/b';
    return "wms/b";
}));
var port = 1;
var storeArea = 'cn';
var fileName = "A";
var matchedHandlers = dwnFileList.filter(function (el) {
    return el.fileName.toLowerCase() === fileName.toLowerCase();
});
var handler;
if (matchedHandlers.length > 0)
    handler = matchedHandlers[0];
if (!handler) {
    console.log("no handler for fileName:{}", fileName);
}
else {
    console.log(handler.getDwnUrl.apply(null, [port, storeArea, { isUsa: false }]));
}
