const compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg);
        return fn(result);
    }
}
