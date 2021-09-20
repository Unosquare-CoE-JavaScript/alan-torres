// ToNumber
    // Examples
        // "" => 0
        // "0" => 0
        // "-0" => -0
        // " 009 " => 9
        // "3.14159" => 3.14159
        // "0." => 0
        // ".0" => 0
        // "." => NaN
        // "Oxaf" => 175
        // false => 0
        // true => 1
        // null => 0
        // undefined => NaN
    
        // ToNumber(object):
        // ToPrimitive(number)
        // aka: valueOf() / toString()
        // (for [] and {} by default):
        // valueOf() {return this;}
        // --> toString()
            // Examples
                // [""] => 0
                // ["0"] => 0
                // ["-0"] => -0
                // [null] => 0
                // [undefined] => 0
                // [1,2,3] => NaN
                // [[[[]]]] => 0
                // {..} => NaN
                // {valueOf(){return 3;}} => 3
