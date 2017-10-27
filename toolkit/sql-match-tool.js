/**
 * Created by dell on 2017/10/26.
 */

function matchSql() {
    var sql_to_match_context = document.getElementById("sql_to_match").value;
    var param_to_match_context = document.getElementById("param_to_match").value;

    //parse sql_to_match
    var real_sql_to_match_context = delete_prefix(sql_to_match_context);
    //parse params
    var real_array = delete_prefix(param_to_match_context);
    //var indexOf = sql_to_match_context.indexOf("?");
    var real_param_with_type_array = real_array.split(",");
    var final_params = [];

    real_param_with_type_array.forEach(function (ele) {
        if (ele.endsWith(")")) {
            ele = ele.substring(0, ele.length - 1);
            var paramAndType = ele.split("(");
            var param = {
                data_value: "",
                data_type: ""
            };
            param.data_value = paramAndType[0].trim();
            param.data_type = paramAndType[1].trim();
            final_params.push(param);
        }
    });
    console.log(final_params);

    var count = 0;
    var index = real_sql_to_match_context.indexOf("?");
    while (index != -1) {
        var final_param = final_params[count++];
        let para = "null";
        if (final_param) {
            let para_type = final_param.data_type.toLowerCase();
            switch (para_type) {
                case "integer":
                case "long":
                {
                    para = final_param.data_value;
                }
                    break;
                default:
                {
                    para = "'" + final_param.data_value + "'";
                }
            }
        }
        console.log(para);
        real_sql_to_match_context = real_sql_to_match_context.substring(0, index - 1) + para + real_sql_to_match_context.substring(index + 1, real_sql_to_match_context.length);
        index = real_sql_to_match_context.indexOf("?");
    }
    document.getElementById("match_result").value = real_sql_to_match_context;

}

function delete_prefix(context) {
    var sql_array = context.split(":");
    return sql_array.length > 1 ? sql_array[1].trim() : sql_array[0].trim();
}