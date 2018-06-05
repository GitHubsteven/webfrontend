/**
 * Created by dell on 2018/3/8.
 */
let equalsDateByDay = function(first,second) {
    if (!first && !second) return true;
    if ((first == null && second != null) || (first != null && second == null)) return false;
    if(first.getFullYear() != second.getFullYear()) return false;
    if(first.getMonth() != second.getMonth()) return false;
    return first.getDate() == second.getDate();

};

console.log(equalsDateByDay(new Date(),new Date("2018-03-09")));