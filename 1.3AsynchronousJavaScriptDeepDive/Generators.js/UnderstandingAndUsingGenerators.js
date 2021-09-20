
"use strict";

function * genTest() {
    let x = 0;
    console.log('start');
    yield ++x;
    console.log(x);
    x++;
    console.log(x);
    yield x++;
    console.log('end');
    return x;
};

let gen = genTest();
gen.next();
gen.next();
gen.next();

const test = function *() {
    yield 10;
    yield 20;
    yield 30;
};

let it = test();
