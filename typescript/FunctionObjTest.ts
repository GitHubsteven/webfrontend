class FileUrlObj {
    fileName: string;
    getDwnUrl: (port, storeArea, option) => string;

    constructor(public name: string, public url: (port, storeArea, option) => any) {
        this.fileName = name;
        this.getDwnUrl = url;
    }
}

let dwnFileList: Array<FileUrlObj> = [];

dwnFileList.push(
    new FileUrlObj("A", (port, storeArea, option) => {
        console.log("port:{},storeArea:{},option:{}", port, storeArea, option);
        if (!option) option = {};
        if (port == 1 && storeArea === 'jp'&& !option.isUsa) return "wms/jp/a";
        if (option.isUsa) return 'wms/us/a';
        return "wms/a";
    })
);

dwnFileList.push(new FileUrlObj("B", (port, storeArea, option) => {
    console.log("port:{},storeArea:{},option:{}", port, storeArea, option);
    if (!option) option = {};
    if (port == 1 && storeArea === 'jp' && !option.isUsa) return "wms/jp/B";
    if (option.isUsa) return 'wms/us/b';
    return "wms/b";
}));

let port = 1;
let storeArea = 'cn';
let fileName = "A";
let matchedHandlers = dwnFileList.filter(el => {
    return el.fileName.toLowerCase() === fileName.toLowerCase();
});
let handler;
if (matchedHandlers.length > 0) handler = matchedHandlers[0];

if (!handler) {
    console.log("no handler for fileName:{}", fileName);
} else {
    console.log(handler.getDwnUrl.apply(null, [port, storeArea,{isUsa:false}]));
}
