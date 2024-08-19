/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};
console.log(argumentsLength(5));
console.log(argumentsLength({}, null, "3"));
console.log(argumentsLength(1, 2, 3));

/**
 * argumentsLength(1, 2, 3); // 3
 */