// ToString
    // Examples:
        // null => "null"
        // undefined => "undefined"
        // true => "true"
        // false => "false"
        // 3.14159 => "3.14159"
        // 0 => "0"
        // -0 => "0"

    // ToString(object):
    // ToPrimitive(string)
    // aka: toString() / valueOf()
        // Examples:
            // [] => ""
            // [1,2,3] => "1,2,3"
            // [null, undefined] => ","
            // [[[],[],[]],[]] => ",,,"
            // [,,,,] => ",,,"
            // {} => "[object Object]"
            // {a:2} => "[object Object]"
            // {toString(){return "X";}} => "X"
