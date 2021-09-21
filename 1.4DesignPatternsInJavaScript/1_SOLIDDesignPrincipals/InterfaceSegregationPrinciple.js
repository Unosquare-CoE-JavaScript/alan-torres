
// 4. Interface Segregation Principle
// - Don't put too much into an interface; split into separate interfaces
// - YAGNI - You Ain't Going to Need It

var aggregation = (baseClass, ...mixins) => {
    class base extends baseClass {
        constructor (...args) {
            super(...args);
            mixins.forEach((mixin) => {
            copyProps(this,(new mixin));
            });
        }
    }
    let copyProps = (target, source) => {  // this function copies all properties and symbols, filtering out some special ones
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
            })
    };
    mixins.forEach((mixin) => {
        // outside constructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
};

class Document {

}

class Machine {
    constructor() {
        if (this.constructor.name === 'Machine')
            throw new Error('Machine is abstract!');
    }

    print(doc) {}
    fax(doc) {}
    scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
    print(doc) {
        // ..
    }

    fax(doc) {
        // ..
    }

    scan(doc) {
        // ..
    }
}

class NotImplementedError extends Error {
    constructor(name) {
        let msg = `${name} is not implemented!`;
        super(msg);
        // maintain proper stack trace
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, NotImplementedError);
    }
}

class OldFashionedPrinter extends Machine {
    print(doc) {
        // ok
    }

    // omitting this is the same as no-op impl

    // fax(doc) {
    //   // do nothing
    // }

    scan(doc) {
        // throw new Error('not implemented!');
        throw new NotImplementedError('OldFashionedPrinter.scan')
    }
}


// Solution
class Printer {
    constructor() {
        if (this.constructor.name === 'Printer')
            throw new Error('Printer is abstract!');
    }

    print(){}
}

class Scanner {
    constructor() {
        if (this.constructor.name === 'Scanner')
            throw new Error('Scanner is abstract!');
    }

    scan(){}
}

class Photocopier extends aggregation(Printer, Scanner) {
    print() {
        // IDE won't help you here
    }

    scan() {
        //
    }
}

let printer = new OldFashionedPrinter();
printer.fax(); // nothing happens
//printer.scan();
