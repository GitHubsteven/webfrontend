/**
 * Created by dell on 2017/10/27.
 */
function create_batch_sql() {
    var sql_template = document.getElementById("sql_template").value;
    var partition_prefix = document.getElementById("partition_prefix").value;
    var range = document.getElementById("range").value;

    //parse range if multi ranges exist
    var ranges = range.split(";");
    var final_range = [];
    ranges.forEach(function (preRange) {
        var preRangeArr = preRange.split("-");
        var range = {
            start: 0,
            end: 0
        };
        if (preRangeArr.length == 2) {
            range.start = preRangeArr[0].trim().toLowerCase();
            range.end = preRangeArr[1].trim().toLowerCase();
            final_range.push(range);
        }
    });

    //parse sql_template
    //TODO 忽然忘记要做什么了
}
