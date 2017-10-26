///**
// * Created by dell on 2017/10/19.
// */
function array() {
    var arr = Array(4);
    arr.push("American");
    arr.push("Russia");
    arr.push("China");
    arr.push("UK");

    arr[20] = "Germany";

    console.log(arr.length);
    arr.forEach(function (element) {
        console.log(element);
    });

    console.log(arr.indexOf("Germany"));
    console.log("typeof arr :%s",typeof arr);
}
//array();


//关联数组
function relatedArray() {
    var rel_arr = Array();
    rel_arr["Jack"] = "Rose";
    rel_arr["Romiou"] = "jeleye";
    rel_arr.forEach(function(elem){
        console.log(elem);
    });
    console.log(rel_arr["Jack"]);
    console.log("typeof rel_arr:%s",typeof rel_arr);
}
//relatedArray();

//function

//javascript var name rule: use "_" to split two words

//declare a variable in function without "var" will be defined as global variable
function vari(){
    var local_var = 20;
    local_or_global_var = 30;
}
//vari();






