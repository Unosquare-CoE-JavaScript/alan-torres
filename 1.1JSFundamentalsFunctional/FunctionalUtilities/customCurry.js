const curry = (fn) => {
    return (arg) => {
        return (arg2) => {
            return fn(arg, arg2);
        }
    }
}
