/**
 * Created by dell on 2017/9/14.
 */
/**
 * 如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：
 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
 compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
 * @type {number[]}
 * D:\emptyPro\js\com\sort>node comJsTest.js
 [ 4, 3, 2, 1 ]
 */
var array = [1,2,3,4];
array.sort(compareFn);
function compareFn(a, b) {
    if (a > b) {
        return -1;
    } else if (a == b) {
        return 0;
    } else {
        return 1;
    }
}
console.log(array);

