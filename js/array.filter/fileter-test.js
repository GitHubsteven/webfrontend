/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 *
 * Created by dell on 2017/10/10.
 */



var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

var longWords = words.filter(function(word){
    return word.length > 6;
});