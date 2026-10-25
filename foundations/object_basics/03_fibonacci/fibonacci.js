const fibonacci = function(num) {
    if (num <= 0 || num === NaN || !Number.isFinite(num))
        return "OOPS";
    if (num <= 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
