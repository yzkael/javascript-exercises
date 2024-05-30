const fibonacci = function(value) {
    const number = Number(value);

    if (isNaN(number)) return "Invalid input";
    if (number < 0) return "OOPS";
    if (number === 0) return 0;
    if (number === 1) return 1;

    const array = [0, 1];

    // Get Fibonacci
    for (let index = 2; index <= number; index++) {
        array.push(array[index - 1] + array[index - 2]);
    }

    return array[number];
};

// Do not edit below this line
module.exports = fibonacci;
